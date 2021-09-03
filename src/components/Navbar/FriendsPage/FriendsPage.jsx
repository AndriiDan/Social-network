import React from 'react';
import FriendItem from './FriendItem/FriendItem';
import s from './FriendsPage.module.css';

const FriendsPage = (props) => {

    let friends = [
        { id: 1, name: 'Танька' },
        { id: 2, name: 'Сергій' },
        { id: 3, name: 'Толік' }
    ]

    let friendsElements = friends.map(f => <FriendItem name={f.name} id={f.id} />)

    return (
        <div>
            <div>
                <div className={s.friendsPage}>My Friends</div>
                <div className={s.friends3}>{friendsElements}</div>
            </div>
        </div>
    )
}

export default FriendsPage;

// const MyPosts = (props) => {

//     let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
  
//     return <div className={s.content}>
//       <div className={s.postsBlock}>
//         <h3>My posts</h3>
//         <div>
//           <div>
//             <textarea></textarea>
//           </div>
//           <div>
//             <button>Add post</button>
//           </div>
//         </div>
//         <div className={s.posts}>
//           {postsElement}
//         </div>
//       </div>
//     </div>
//   }
  
//   export default MyPosts;