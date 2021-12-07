import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  // Створює новий масив з постів
  let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  // Створює зсилку на елемент <textarea ref={newPostElement} ... />
  // let newPostElement = React.createRef();

  // Функція, яка додає новий пост
  let onAddPost = values => {
    props.addPost(values.newPostText);
  }

  // Ф-ція, яка посимвольно оновлює поле вводу
  // let onPostChange = () => {
  //   let text = newPostElement.current.value;
  //   props.updateNewPostText(text);
  // }

  return <div className={s.content}>
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  </div>
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {/* введене значення користувачем */}
        <Field component="textarea" name="newPostText" placeholder="Enter your post" />

        {/* введене значення користувачем
        <textarea ref={newPostElement}
          // поточне значення з store (state)
          value={props.newPostText}
          // обробник подій onChange виконує функцію onPostChange
          onChange={onPostChange} /> */}

      </div>
      <div>
        <button>Add post</button>

        {/* <button onClick={onAddPost}>Add post</button> */}
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

export default MyPosts;