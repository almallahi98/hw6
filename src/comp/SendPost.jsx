import {React,useState} from 'react'
import axios from 'axios';
import '../App.css';
import { useNavigate  } from 'react-router-dom'
function SendPost(){
  const [State, setState] = useState({fname:"",lname:"",flag:false});
  let navigate = useNavigate();
  const PostReq=()=>{
      axios.post('https://6362428d7521369cd068e6aa.mockapi.io/api/test/v1/toDo',
      {fname:State.fname,lname:State.lname}).then(res=>{})
  }


  const getReq = () => {
    axios({
      method: "get",
      url: "https://6362428d7521369cd068e6aa.mockapi.io/api/test/v1/toDo",
      responseType: "stream",
    }).then((res) => {
      
      let arr =JSON.parse(res.data);
      console.log(arr)
      arr.forEach(elm => {
        if(elm.fname===State.fname&&elm.lname===State.lname)
        { //Do save in memory
          setState({...State,flag:true})
          localStorage.setItem("name",JSON.stringify(State.fname))
          localStorage.setItem("lname",JSON.stringify(State.lname))
          navigate('/home')
          
        }
      })
    });
  }; 
return (
    <div className='container'>
        <input className='input' placeholder='usern name' onChange={e=>{setState({...State,fname:e.target.value})}}/>
        <input className='input' placeholder='password' type={'password'} onChange={e=>{setState({...State,lname:e.target.value})}}/>
        {/* <Link to={'../home'}> */}
        <button className='btn btn-green' onClick={getReq}>Login</button>
        
        <button className='btn btn-blue' onClick={PostReq}>sign up</button>
        
    </div>
    
  )
}
export default SendPost