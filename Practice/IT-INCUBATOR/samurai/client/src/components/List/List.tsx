import { FC, ReactNode } from "react";
import c from "./List.module.css";

type TListProps = {
		listItems: ReactNode;
		listLength: number;
}

export const List: FC<TListProps> = ({
		listItems, listLength,
}) => {
		
		return (
			<div className={ c.listContainer }>
					<ul className={ c.list }>
							{ listLength !== 0 ? listItems : (<div>Список пуст</div>) }
					</ul>
			</div>
		);
};