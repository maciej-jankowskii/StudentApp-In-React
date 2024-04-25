import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getStudentById, updateStudent } from "../service/StudentService";

function UpdateStudent() {
	const [student, setStudent] = useState({
		name: "",
		surname: "",
		fieldOfStudy: "",
		phone: "",
		email: "",
	});

	const { id } = useParams();

	const navi = useNavigate();

	useEffect(() => {
		getStudent();
	}, []);

	const { name, surname, fieldOfStudy, phone, email } = student;

	const onInputChange = (e) => {
		setStudent({ ...student, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		await updateStudent(id, student);
		navi("/students");
	};

	const getStudent = async () => {
		const result = await getStudentById(id);
		setStudent(result.data);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
					<h2 className="text-center m-4">Edit student</h2>

					<form onSubmit={(e) => onSubmit(e)}>
						<div className="mb-3">
							<label htmlFor="Name" className="form-label">
								First name
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="Enter first name of student"
								name="name"
								value={name}
								onChange={(e) => onInputChange(e)}
							/>
						</div>

						<div className="mb-3">
							<label htmlFor="Surname" className="form-label">
								Last name
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="Enter last name of student"
								name="surname"
								value={surname}
								onChange={(e) => onInputChange(e)}
							/>
						</div>

						<div className="mb-3">
							<label htmlFor="Name" className="form-label">
								Field of study
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="Enter field of study"
								name="fieldOfStudy"
								value={fieldOfStudy}
								onChange={(e) => onInputChange(e)}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="Phone" className="form-label">
								Phone number
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="Enter telephone number"
								name="phone"
								value={phone}
								onChange={(e) => onInputChange(e)}
							/>
						</div>

						<div className="mb-3">
							<label htmlFor="Email" className="form-label">
								E-mail
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="Enter e-mail address"
								name="email"
								value={email}
								onChange={(e) => onInputChange(e)}
							/>
						</div>

						<button className="btn btn-outline-primary">Edit Student</button>
						<Link className="btn btn-outline-danger mx-2" to="/">
							Cancel
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
}

export default UpdateStudent;
