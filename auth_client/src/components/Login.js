import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../api';

function Login() {
     const[error,setError] =useState('');
    const navigate =useNavigate();
    const [data,setData]=useState({
        email:"",
        password:""
    });
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setError("")
        try{
            const{data:res}=await API.post('api/auth',data);
            localStorage.setItem('token',res.token);
            navigate('/');
        } 
        catch(err){
            const msg =err?.response?.data||err?.response?.message || "Login Failed"
             setError(typeof msg === 'string'? msg :'login failed')
        }
    }
   
    const handleChange=(e)=>{
        setData(prev=>({...prev,[e.target.name]:e.target.value}))
    }
  return (
     <div className='container py-5'>
        <div className='row justify-content-center'>
            <div className='col-12 col-sm-10 col-md-8 col-lg-6'>
                <div className='card shadow-sm'>
                    <div className='card-body p-4'>
                        <h3 className='mb-4 text-center'>Login to Your Account</h3>
                          {error && <div className="alert alert-danger">{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                

                                 <div className='mb-3'>
                                    <label className='form-label'>Email</label>
                                    <input type='email' name='email' className='form-control' placeholder='Enter email' onChange={handleChange} required/>

                                </div>

                                 <div className=' mb-3'>
                                    <label className='form-label'>Password</label>
                                    <input type='password' name='password' className='form-control' placeholder='min 6 character' onChange={handleChange}  required/>

                                </div>
                                  </div>
                                <button type='submit' className='btn btn-success w-100'>Login</button>
                        </form>
                        <div className='text-center mt-3'>
                            <span>Don't have an account?</span>
                            <Link to="/signup">Signup</Link>
                        </div>
                    </div>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Login
