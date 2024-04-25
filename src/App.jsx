import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from "./components/HeaderComponent";
import HomeComponent from "./components/HomeComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentListComponent from "./components/StudentListComponent";
import Student from "./components/StudentComponent";
import UpdateStudent from "./components/UpdateStudentComponent";
import StudentDetailsComponent from "./components/StudentDetailsComponent";

function App() {
	return (
		<>
			<BrowserRouter>
				<HeaderComponent></HeaderComponent>
				<Routes>
					<Route path="/" element={<HomeComponent></HomeComponent>}></Route>
					<Route
						path="/students"
						element={<StudentListComponent></StudentListComponent>}
					></Route>
					<Route path="/add" element={<Student></Student>}></Route>
					<Route
						path="/update/:id"
						element={<UpdateStudent></UpdateStudent>}
					></Route>
					<Route
						path="/details/:id"
						element={<StudentDetailsComponent></StudentDetailsComponent>}
					></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
