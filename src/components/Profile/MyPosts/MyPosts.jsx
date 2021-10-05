import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  // Створює новий масив з постів
  let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  // Створює зсилку на елемент <textarea ref={newPostElement} ... />
  let newPostElement = React.createRef();

  // Функція, яка додає новий пост
  let onAddPost = () => {
    props.addPost();
  }

  // Ф-ція, яка посимвольно оновлює поле вводу
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return <div className={s.content}>
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          {/* введене значення користувачем */}
          <textarea ref={newPostElement}
            // поточне значення з store (state)
            value={props.newPostText}
            // обробник подій onChange виконує функцію onPostChange
            onChange={onPostChange} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  </div>
}

export default MyPosts;