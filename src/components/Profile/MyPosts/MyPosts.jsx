import React from 'react';
import s from './MyPosts.module.css'

const MyPosts = () => {
  return <div className={s.content}>
    <div>
      My posts
        <div>
        New Post
        </div>
      <div className={s.posts}>
        <div className={s.item}>post 1</div>
        <div className={s.item}>post 2</div>
      </div>
    </div>
  </div>
}

export default MyPosts;