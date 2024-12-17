import { Flex } from "antd";

export const Cart = ({ count }: { count: number }) => {
	return <Flex>Число товаров: {count}</Flex>;
};
