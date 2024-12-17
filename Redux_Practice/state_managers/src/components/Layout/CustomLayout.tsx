import { Layout, Switch } from "antd";
import { contentStyle, footerStyle, headerStyle, layoutStyle } from "./styles";
import { Cart } from "../Cart/Cart";
import { Items } from "../Items/Items";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";

const { Header, Footer, Content } = Layout;

export const CustomLayout = () => {
	const themeColor = useSelector((state) => state.theme);
	const count = useSelector((state) => state.count);
	const dispatch = useDispatch();

	const handleSwitch = (e: boolean) => {
		if (e) {
			dispatch(toggleTheme("grey"));
		} else {
			dispatch(toggleTheme("white"));
		}
	};

	return (
		<Layout style={{ ...layoutStyle }}>
			<Header style={{ ...headerStyle, backgroundColor: themeColor }}>
				<Cart count={count} />
				<Switch onChange={handleSwitch} title="Поменять тему" />
			</Header>
			<Content style={contentStyle}>
				<Items />
			</Content>
			<Footer style={footerStyle}>Footer</Footer>
		</Layout>
	);
};
