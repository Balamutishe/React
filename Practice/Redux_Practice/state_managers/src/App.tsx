import "./App.css";
import { CustomLayout } from "./components/Layout/CustomLayout";
import { Provider } from "react-redux";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<CustomLayout />
		</Provider>
	);
}

export default App;
