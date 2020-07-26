import React from "react";
function SearchForm(props){
    console.log("from search form",props);
    console.log("from searchform ", props.nameProperty);
    return(
       
        <form >
  <div className="form-group">
    <label htmlFor="search">Search By First Name Or Last Name:{props.search}</label>
    <input 
    onChange={props.handleInputChange}
    value={props.search} 
    name="search"
    
    type="text" 
   className="form-control"
   placeholder="Search for an Employee"
   id="search"
   />
    
   
  </div>
  
  <button onClick={props.handleFormSubmit} class="btn btn-primary">Search</button>
</form>

        
    );
}
export default SearchForm;