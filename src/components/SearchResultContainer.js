import React, { Component } from 'react';
import API from '../utils/API';
import SearchForm from "./SearchForm";
import EmployeeCard from "./EmployeeCard";

class SearchResultContainer extends Component {
    state={
        search: "",
        searchResults:[],
        nameProperty: ""
        
        

    };
    //
    componentDidMount(){
        API.search()
        .then(res=>{
            console.log(res);
            console.log(res.data.results);
             var newResults= res.data.results.map((result,index)=>({
            firstName: result.name.first,
            lastName: result.name.last,
            picture: result.picture.large,
            email: result.email,
            phone: result.phone,
            dob: result.dob.age,
            key: index
            
             }))
             console.log(newResults);
            this.setState({
                searchResults: newResults
            })


        })
        .catch(err=>console.log(err));
    }
    // when the form is submitted, search the name 
    handleFormSubmit=(event)=>{
        event.preventDefault();
        const value=event.target.value;
        const name = event.target.name;
        
        // question to ask
        this.filterEmployees(value);
        this.setState({
            [name]:value
        })
        
        console.log("i am clicked");
        this.filterEmployees(value);
        
        this.filterEmployees(this.state.search);

    }
    //method for handle input change
    handleInputChange=(event)=>{
        event.preventDefault();
        const value=event.target.value;
        
        const name= event.target.name;
        this.setState({
            [name]: value
            
        })
        

    }
    //filter employee 
    filterEmployees=(searchEmployee)=>{
        console.log("employee search", searchEmployee);
        var filterResult= this.state.searchResults.filter(employe=>employe.firstName===searchEmployee)
        this.setState({
            searchResults: filterResult
        })
        console.log("filter result", filterResult);
        
    }
   
    
    render() { 
        return ( 
        <div className="container">
           
            <div className="row">
                <div className="col-md-12">
                    <h1>Employee Directory</h1>

                </div>
                <div className="row">
                    <div className="col-md-6">
                        <SearchForm
                        search={this.state.search}
                        nameProperty={this.state.nameProperty}
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                        />

                    </div>

                </div>
                
               


            </div>
            <div> 
                
               {[...this.state.searchResults].map((item)=>
                   <EmployeeCard
                   picture={item.picture}
                   firstName={item.firstName}
                   lastName={item.lastName}
                   email={item.email}
                   phone={item.phone}
                   key={item.key}
                   
                   />
               )}
                
                
                
                </div>
            
            
            
            </div> );
    }
}
 
export default SearchResultContainer ;