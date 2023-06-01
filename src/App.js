import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./screens/HomePage";
import MojKomponent from "./components/Footer";
import PokomonsTableScreen from "./screens/PokomonsTableScreen";
import Locations from "./screens/Locations";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/admin/pokomonsList" element={<PokomonsTableScreen />} />
				<Route path="/locations" element={<Locations />} />
			</Routes>
			<MojKomponent />
		</Router>
	);
}

export default App;
