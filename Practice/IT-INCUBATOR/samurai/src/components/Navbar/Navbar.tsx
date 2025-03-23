import c from './Navbar.module.css'

export const Navbar = () => {
  return (
    <section className={c.section}>
      <nav className={c.navbar}>
        <ul className={c.list}>
          <li >Profile</li>
          <li>Messages</li>
          <li>News</li>
          <li>Music</li>
          <li>Settings</li>
        </ul>
      </nav>
    </section>
  )
}