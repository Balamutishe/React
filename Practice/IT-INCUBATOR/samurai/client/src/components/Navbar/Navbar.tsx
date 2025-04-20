import { Link } from "react-router";

import c from "./Navbar.module.css";

export const Navbar = () => {
		const navigationList = [
				{
						id: "1",
						title: "Profile",
						to: "/",
				},
				{
						id: "2",
						title: "Dialogs",
						to: "/dialogs",
				},
				{
						id: "3",
						title: "News",
						to: "/news",
				},
				{
						id: "4",
						title: "Music",
						to: "/music",
				},
				{
						id: "5",
						title: "Settings",
						to: "/settings",
				},
				{
						id: "6",
						title: "Find users",
						to: "/users",
				},
		];
		
		return (
			<nav className={ c.navbar }>
					<ul className={ c.list }>
							{ navigationList.map((nav) => (
								<li key={ nav.id }>
										<Link
											to={ `${ nav.to }` }
										>{ nav.title }</Link>
								</li>
							)) }
					</ul>
			</nav>
		);
};