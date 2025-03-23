import UserImg from '../../public/149071.png'
import c from './Profile.module.css'

export const Profile = () => {
  return (
    <section className={c.profile}>
      <div>
        <h2 className={c.title}>UserData</h2>
        <div className={c.user}>
          <img src={UserImg} alt='ProfileImg' className={c.img}/>
          <div className={c.data}>
            <div>Balamutishe</div>
            <div>
              <div>UserDescription</div>
              <div>UserDescription</div>
              <div>UserDescription</div>
              <div>UserDescription</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className={c.title}>PostsList</h2>
        <ul className={c.list}>
          <li>Post1</li>
          <li>Post2</li>
          <li>Post3</li>
          <li>Post4</li>
        </ul>
      </div>
    </section>
  )
}