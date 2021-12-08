import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validators';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  // Створює новий масив з постів
  let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  // Функція, яка додає пост
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

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
        {/* validate={[required]} - обов'язово заповнити */}
        <Field component="textarea" name="newPostText" placeholder="Enter your post" validate={[required]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

export default MyPosts;