import React, { Component } from 'react';
import API from '../utils/API';
import SearchForm from "./SearchForm";
import EmployeeCard from "./EmployeeCard";


class SearchResultContainer extends Component {
    state={
        search: "",
        searchResults:[],
      
        
        

    };
    //
    componentDidMount(){
        this.biodata();
       
      
    }
     biodata=()=> {
        API.searchEmp()
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
        // const value=event.target.value;
        // const name = event.target.name;
        
        // question to ask
        // this.filterEmployees(event.target.value);
        this.setState({
            // [name]:value
            search: event.target.value
        })
        
        console.log("i am clicked");
        // this.filterEmployees(event.target.value);
        
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
        var filterResult=""
         filterResult= this.state.searchResults.filter(employe=>((employe.firstName.toLowerCase()==searchEmployee) || (employe.lastName.toLowerCase()==searchEmployee)))
        // this.setState({
        //     searchResults: filterResult
        // })
        // this.setState({
        //     filter: filterResult
        // })
        // console.log("filter result", filterResult);
        if (filterResult != [] ) {
            this.setState({
                searchResults: filterResult
            })
        } else {
            this.setState({
                searchResults: "Search not found"
            })
        }
        console.log("filter result", filterResult);
        console.log("search result", this.searchResults);

        

    }
     
   
    
    render() { 
       
       
        
        return ( 
        <div className="container">
           
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Employee Directory</h1>

                </div>
                <div className="row">
                    <div className="col-md-12 ">
                        <SearchForm
                        search={this.state.search}
                        // nameProperty={this.state.nameProperty}
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                        />

                    </div>

                </div>
                
               


            </div>
            <div> 
                

{[...this.state.searchResults].length>0 ?([...this.state.searchResults].map((item)=>
                   <EmployeeCard
                   picture={item.picture}
                   firstName={item.firstName}
                   lastName={item.lastName}
                   email={item.email}
                   phone={item.phone}
                   key={item.key}
                   
                   />)):<h1>Result not found</h1>
                
            }
   
               
        
            
                
                
                
                </div>
            
            
            
            </div> );
    }
}
 
export default SearchResultContainer ;