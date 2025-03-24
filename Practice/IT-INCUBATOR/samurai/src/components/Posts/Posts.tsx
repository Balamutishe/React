import { Post } from '../Post/Post.tsx'

import c from './Posts.module.css'

export const Posts = () => {
  return (
      <div>
        <h2 className={c.title}>PostsList</h2>
        <form className={c.form}>
          <textarea className={c.textarea}/>
          <button>
            Add Post
          </button>
        </form>
        <ul className={c.list}>
          <li className={c.item}><Post message={'Hi, how are you'} likeCount={20}/></li>
          <li className={c.item}><Post message={'Greats weather'} likeCount={10}/></li>
        </ul>
      </div>
  )
}