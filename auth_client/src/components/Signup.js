import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../api';



function Signup() {

     const [data,setData] =useState(
        {
            firstName:'',
            lastName:'',
            email:'',
            password:''

        
        }
    );
    const [error,setError] =useState('');
    const navigate =useNavigate();
    const handleChange=(e)=>{
        setData(prev=>({...prev,[e.target.name]:e.target.value}))
    }
   const handleSubmit =async(e)=>{
  e.preventDefault();
  setError('')
  try{
    await API.post('/api/users',data);
    navigate('/login')
  }
  catch(err){
   
    const msg =err?.response?.data || err?.response?.message ||'Signup failed';
    setError(typeof msg === 'string'? msg :'signup failed')

  }
   }
  return (
    <div className='container py-5'>
        <div className='row justify-content-center'>
            <div className='col-12 col-sm-10 col-md-8 col-lg-6'>
                <div className='card shadow-sm'>
                    <div className='card-body p-4'>
                        <h3 className='mb-4 text-center'>Creat Account</h3>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-md-6 mb-3'>
                                    <label className='form-label'>First Name</label>
                                    <input type='text' name='firstName' className='form-control' placeholder='Enter firstName' onChange={handleChange} required/>
                                </div>

                                 <div className='col-md-6 mb-3'>
                                    <label className='form-label'>Last Name</label>
                                    <input type='text' name='lastName' className='form-control' placeholder='Enter lastName'  onChange={handleChange} required/>
                                </div>

                                 <div className='mb-3'>
                                    <label className='form-label'>Email</label>
                                    <input type='email' name='email' className='form-control' placeholder='Enter email' onChange={handleChange} required/>

                                </div>

                                 <div className=' mb-3'>
                                    <label className='form-label'>Password</label>
                                    <input type='password' name='password' className='form-control' placeholder='min 6 character'  onChange={handleChange} required/>

                                </div>
                                  </div>
                                <button type='submit' className='btn btn-primary w-100'>SIgn Up</button>
                        </form>
                        <div className='text-center mt-3'>
                            <span>Already have an account?</span>
                            <Link to="/login">Signin</Link>
                        </div>
                    </div>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Signup
