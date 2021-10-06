import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>
      { (store) => {
        // let state = props.store.getState();
        let state = store.getState();

        // ф-ція, яка додає пост
        let addPost = () => {
          // props.store.dispatch(addPostActionCreator());
          store.dispatch(addPostActionCreator());
        }

        // ф-ція, яка приймає текст з MyPosts і обновляє посимвольно в BLL
        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          // props.store.dispatch(action);
          store.dispatch(action);
        }
        return <MyPosts
          updateNewPostText={onPostChange}
          addPost={addPost}
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText} />
      }}
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;