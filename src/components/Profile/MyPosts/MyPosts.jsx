import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';

class MyPosts extends React.Component {

  // через 3 сек змінити стейт
  componentDidMount() {
    setTimeout(() => {
      this.setState({ a: 12 })
    }, 3000)
  }

  // чи обновляти компоненту MyPosts; || - або 
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps != this.Props || nextState != this.state
  }

  render() {
    console.log("RENDER MyPosts");
    // Створює новий масив з постів
    let postsElement = this.props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    // Функція, яка додає пост
    let onAddPost = (values) => {
      this.props.addPost(values.newPostText);
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
}

// константа для максимальної довжини в 10 символів 
const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {/* введене значення користувачем */}
        {/* validate: required - обов'язово заповнити; maxLength10 - макс. к-сть символів */}
        <Field component={Textarea} name="newPostText" placeholder="Enter your post"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

export default MyPosts;