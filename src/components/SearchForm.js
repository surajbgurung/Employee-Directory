import React from "react";
function SearchForm(props){
    console.log("from search form",props);
    console.log("from searchform ", props.nameProperty);
    return(
       
        <form>
  <div className="form-group">
    <label htmlFor="search">Search:{props.search}</label>
    <input 
    onChange={props.handleInputChange}
    value={props.search} 
    name="search"
    type="text" 
   className="form-control"
   placeholder="Search for an Employee"
   id="search"
   />
    <br />
    <label>Choose FirstName Or Last Name:</label>
                <select 
                    value={props.nameProperty}
                    onChange={props.handleInputChange}
                    name="nameProperty"
                >
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                   
                </select>
                <br></br>
    <span>I have choose {props.nameProperty}</span>
   
  </div>
  
  <button onClick={props.handleFormSubmit} class="btn btn-primary">Search</button>
</form>

        
    );
}
export default SearchForm;