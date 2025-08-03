import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props);

        console.log("Parent constructor");
    }
    componentDidMount(){
        console.log("Parent Mount");
    }
    
    render(){
        console.log("Parent render");
    return(
        <div>
            <h1>This is about page</h1>

            {/* <User name={"Zabee Ahamed (Func)"}/> */}

            <UserClass name={"Zabee Ahamed (Class)"}/>
        </div>
    )}
};
export default About;