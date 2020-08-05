import React from "react";
function EmployeeCard (props){
    
     console.log("employeeCard component",props);
return(
    <div className="row">
        <table className="table">
        <thead>
    <tr>
      <th scope="col">Photo</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      
    </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="row"><img alt={props.firstName}  src={props.picture} /></th>
<td>{props.firstName}</td>
<td>{props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
    </tr>

  </tbody>

        </table>

    </div>
);
}
export default EmployeeCard;