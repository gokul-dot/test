import React,{ Component } from 'react';
class Login extends Component {
  state={
email:'',
password:''
 }

 handleChange=(e)=>{
  this.setState({
[e.target.id]:e.target.value
  })
   }
 handleSubmit=(e)=>{
e.preventDefault();
console.log(this.state);
 }
 render(){
return(
  <div className="container">
 <form className="form" onSubmit={this.handleSubmit}>
 <div>
   <label>Email</label>
   <input type="email" id="email" onChange={this.handleChange}/>
 </div>
 <div>
   <label>password</label>
   <input type="password" id="password"onChange={this.handleChange}/>
 </div>
 <div className="btn">
   <button>submit</button>
   </div>
   </form>
  </div>
)
}
}
export default Login;