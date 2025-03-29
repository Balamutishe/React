import { useState } from "react";
import { NavLinkRenderProps } from "react-router";
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";

import c from './Navbar.module.css'
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../api/users/users.ts";
import { queryClient } from "../../api/queryClient.ts";
import { setUser } from "../../redux/userDataSlice.ts";


export const Navbar = () => {
	const [variantNav, setVariantNav] = useState('users')
	const dispatch = useDispatch()
	const userData = useSelector((state: RootState) => state.userData)
	const userId = userData._id ? userData._id : ''
	const setClassActiveLink = (props: NavLinkRenderProps): string => {
		return props.isActive ? `${ c.active }` : ''
	}

	const queryUsers = useQuery({
		queryFn: () => getAllUsers(),
		queryKey: ["users", "all"]
	}, queryClient)

	const users = queryUsers.status === 'success' ? queryUsers.data : []
	const navigationList = [
		{
			id: "1",
			title: 'User',
			to: ''
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
								to={ `/${ userId }${ nav.to }` }
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
								to={ `/${ user._id }` }
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