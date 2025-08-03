import React from "react"

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state ={
            count:1,
            count1:2
        }
        console.log("child constructor");
    }
    componentDidMount(){
        console.log("CHild mount");
    }

    render(){
        const {count} = this.state;
        console.log("child render");
        return(
            <div className="user-card">
                <h1>{count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1,
                })
                }}> Click </button>
               <h2>Name:{this.props.name}</h2>
               <h3>Location:Deharadun</h3>
               <h4>Id:!234</h4>
            </div>
        )
    };
};

export default UserClass;