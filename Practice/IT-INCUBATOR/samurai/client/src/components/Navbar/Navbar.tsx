import { useState } from "react";
import { NavLinkRenderProps } from "react-router";
import { NavLink } from 'react-router-dom'
import { useDispatch } from "react-redux";

import { getAllPosts } from "../../api/posts/posts.ts";
import { getAllChats } from "../../api/chats/chats.ts";
import { setProfile } from "../../redux/ProfileSlice.ts";
import { setChats } from "../../redux/DialogsSlice.ts";
import { useQueryGetAllUsers } from "../../hooks/api/useQueryGetAllUsers.ts";
import c from './Navbar.module.css'

export const Navbar = () => {
	const users = useQueryGetAllUsers()
	const dispatch = useDispatch()
	const [variantNav, setVariantNav] = useState('users')

	const setClassActiveLink = (props: NavLinkRenderProps): string => {
		return props.isActive ? `${ c.active }` : ''
	}
	const navigationList = [
		{
			id: "1",
			title: 'User',
			to: '/user'
		},
		{
			id: "2",
			title: 'Dialogs',
			to: '/dialogs'
		},
		{
			id: "3",
			title: 'News',
			to: '/news'
		},
		{
			id: "4",
			title: 'Music',
			to: '/music'
		},
		{
			id: "5",
			title: 'Settings',
			to: '/settings'
		}
	]

	return (
		<nav className={ c.navbar }>
			{ variantNav === "navigation" ? (
				<ul className={ c.list }>
					{ navigationList.map((nav) => (
						<li key={ nav.id }>
							<NavLink
								to={ `${ nav.to }` }
								className={ setClassActiveLink }
							>{ nav.title }</NavLink>
						</li>
					)) }
				</ul>
			) : (
				<ul className={ c.list }>
					{ users.map((user) => (
						<li key={ user._id }>
							<NavLink
								to={ '/user' }
								onClick={ async () => {
									dispatch(
										setProfile(
											{ user: user, posts: await getAllPosts(user._id) }))
									dispatch(setChats(await getAllChats(user._id)))
									setVariantNav("navigation")
								} }
							>
								{ user.username }
							</NavLink>
						</li>
					)) }
				</ul>
			) }

		</nav>
	)
}