import { Link } from "react-router-dom";
import "../styles/HeaderComponent.css";

function HeaderComponent() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand cursor-pointer">
						Student Management System
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<Link className="btn btn-outline-light" to="/add">
						Add Student
					</Link>
				</div>
				<Link className="btn btn-outline-light mx-3" to="/students">
					Students
				</Link>
			</nav>
		</div>
	);
}

export default HeaderComponent;
