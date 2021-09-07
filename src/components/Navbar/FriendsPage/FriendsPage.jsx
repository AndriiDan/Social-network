import React from 'react';
import FriendItem from './FriendItem/FriendItem';
import s from './FriendsPage.module.css';

const FriendsPage = (props) => {

    let friendsElements = props.friends.map(f => <FriendItem name={f.name} id={f.id} />)

    return (
        <div>
            <div>
                <div className={s.friendsPage}>My Friends</div>
                <div className={s.friends3}>
                    {/* <img src="data:image/jpeg;base64,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" /> */}
                    {friendsElements}
                </div>
            </div>
        </div>
    )
}

export default FriendsPage;



// let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)



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