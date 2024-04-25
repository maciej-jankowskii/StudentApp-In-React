import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getStudentById } from "../service/StudentService";

function StudentDetailsComponent() {
	const [student, setStudent] = useState({
		name: "",
		surname: "",
		fieldOfStudy: "",
		phone: "",
		email: "",
	});

	const { id } = useParams();

	useEffect(() => {
		getStudent();
	}, []);

	const getStudent = async () => {
		const result = await getStudentById(id);
		setStudent(result.data);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
					<h2 className="text-center m-4">Student details</h2>
					<div className="card">
						<div className="card-header">
							Details of student id: {student.id}
							<ul className="list-group list-group-flush my-4">
								<li className="list-group-item">
									<b>Name: </b>
									{student.name}
								</li>
								<li className="list-group-item">
									<b>Surname: </b>
									{student.surname}
								</li>
								<li className="list-group-item">
									<b>Field of study: </b>
									{student.fieldOfStudy}
								</li>
								<li className="list-group-item">
									<b>Phone: </b>
									{student.phone}
								</li>
								<li className="list-group-item">
									<b>Email: </b>
									{student.email}
								</li>
							</ul>
						</div>
					</div>
					<Link className="btn btn-primary my-3" to={"/students"}>
						Back to list
					</Link>
				</div>
			</div>
		</div>
	);
}

export default StudentDetailsComponent;
