import { useState } from "react";
import { NavLinkRenderProps } from "react-router";
import { NavLink } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import { getAllUsers } from "../../api/users/users.ts";
import { queryClient } from "../../api/queryClient.ts";
import { setUser } from "../../redux/userDataSlice.ts";
import c from './Navbar.module.css'

export const Navbar = () => {
	const [variantNav, setVariantNav] = useState('users')
	const dispatch = useDispatch()
	const setClassActiveLink = (props: NavLinkRenderProps): string => {
		return props.isActive ? `${ c.active }` : ''
	}

	const { data, status } = useQuery({
		queryFn: () => getAllUsers(),
		queryKey: ["users", "all"]
	}, queryClient)

	const users = status === 'success' ? data : []
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
								onClick={ () => {
									dispatch(setUser(user))
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