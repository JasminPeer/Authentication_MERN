import React from 'react'
function Main() {
  const handleLogout =()=>{
    localStorage.removeItem('token');
    window.location.href='/login';

  }

  return (
    <div className='container py-5'>
        <nav className='d-flex justify-content-between align-items-center mb-4'>
            <h3 className='m-0'>Facebook</h3>
            <button  className='btn btn-outline-danger' onClick={handleLogout}>Logout</button>
        </nav>
      <div className='text-center'>
        <h4>Welcome User</h4> 
        <p className='text-muted'>You are logged in.The page is protected by your JWT.</p>
      </div>

    </div>
  )
}

export default Main
