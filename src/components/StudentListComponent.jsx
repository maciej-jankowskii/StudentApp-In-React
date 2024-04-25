import { useEffect, useState } from "react";
import { deleteStudentById, findAllStudents } from "../service/StudentService";
import { Link, useParams } from "react-router-dom";

function StudentListComponent() {
	
	const [users, setUsers] = useState([])

	const {id} = useParams();


	useEffect(() => {
		getAllStudents();

	},[])


	const getAllStudents = async () =>{
		try{
			const response = await findAllStudents();
			setUsers(response.data);

		} catch(err){
			console.log(err);
		}
	}

	const deleteStudent = async (id) =>{
		await deleteStudentById(id);
		getAllStudents();
	}
	return (
		<div className="container">
			<div className="py-4">
				<table className="table shadow">
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Name</th>
							<th scope="col">Surname</th>
							<th scope="col">Field of Study</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{
							users.map((user) => (
								<tr key={user.id}>
									<td>{user.id}</td>
									<td>{user.name}</td>
									<td>{user.surname}</td>
									<td>{user.fieldOfStudy}</td>
									<td>
										<Link to={`/details/${user.id}`} className="btn btn-primary mx-2">Details</Link>
										<Link to={`/update/${user.id}`} className="btn btn-outline-primary mx-2">Update</Link>
										<button className="btn btn-danger" onClick={() => deleteStudent(user.id)}>Delete</button>
									</td>
								</tr>

							) )
						}

					</tbody>
				</table>
			</div>
		</div>
	);
}

export default StudentListComponent;
