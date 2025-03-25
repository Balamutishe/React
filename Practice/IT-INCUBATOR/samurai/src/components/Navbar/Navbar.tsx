import { NavLinkRenderProps } from "react-router";
import { NavLink } from 'react-router-dom'
import c from './Navbar.module.css'

export const Navbar = () => {
    const setClassActiveLink = ( props: NavLinkRenderProps ): string => {
        return props.isActive ? `${ c.active }` : ''
    }

    return (
            <section className={ c.section }>
                <nav className={ c.navbar }>
                    <ul className={ c.list }>
                        <li><NavLink to={ '/' } className={ setClassActiveLink }>Profile</NavLink></li>
                        <li><NavLink to={ '/dialogs' } className={ setClassActiveLink }>Dialogs</NavLink></li>
                        <li><NavLink to={ '/news' } className={ setClassActiveLink }>News</NavLink></li>
                        <li><NavLink to={ '/music' } className={ setClassActiveLink }>Music</NavLink></li>
                        <li><NavLink to={ '/settings' } className={ setClassActiveLink }>Settings</NavLink></li>
                    </ul>
                </nav>
            </section>
    )
}