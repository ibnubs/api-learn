import React from 'react';
import "./App.css";
import axios from "axios";
import Routes from "./routers/Routes"


function App (){
  return (
    <div className="App">
      <Routes />
    </div>
  )
}


// class App extends React.Component{
//   state = {
//     todos:[]
//   }

//   getTodos = async () => {
//     const res = await fetch ('https://jsonplaceholder.typicode.com/todos') 
//     const data = await res.json()
//     console.log(data)
//     this.setState({todos: data})
//   }
  
//   getWithAxios = async () => {
//     const resp = await axios.get('https://jsonplaceholder.typicode.com/todos')
//     this.setState({todos:resp.data})
//     console.log(resp)
//   }
  
//   render(){
//     const list = this.state.todos.map(list => 
//       <div key={list.id}>
//         <p>{list.title}</p>
//       </div>
//       )
    
    
    
//     return(
//       <div className="App">
//         <h1>Todo Aps</h1>
//         <button onClick={this.getTodos}>Get Data</button>
//         <button onClick={this.getWithAxios}>Get Data with axios</button>
//           {list}    
//       </div>
//     )
//   }

// }




export default App;
