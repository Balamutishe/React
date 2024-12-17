import { Button, Card, Flex } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/countSlice";

export const Items = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.count);

	return (
		<Flex vertical gap={40} style={{ height: "100%" }}>
			<Flex gap={20} justify="center">
				<Button onClick={() => dispatch(increment())}>Добавить</Button>
				<Button onClick={() => dispatch(decrement())}>Удалить</Button>
			</Flex>
			<Flex gap={20} wrap>
				{[...new Array(count)]?.map((_item, index) => {
					return <Card key={index}>{index}</Card>;
				})}
			</Flex>
		</Flex>
	);
};
