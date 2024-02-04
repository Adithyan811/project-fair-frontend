import React from 'react'



function MyProfile() {
  return (
    <div className='text-center card shadow m-3 py-3'>
        <h3>My Profile</h3>

      <label>
        <input type="file" style={{display:'none'}}/>
        <img src="https://icon-library.com/images/user-icon-png-transparent/user-icon-png-transparent-20.jpg" width={"100px"} height={"100px"} alt="" />
      </label>

      <div className='w-50' style={{marginLeft:'170px'}}>
      <input type="text" placeholder='User Name' className='form-control mb-3' />
      <input type="text" placeholder='Git Hub' className='form-control mb-3 ' />
      <input type="text" placeholder='LinkedIN' className='form-control mb-3 ' />


      </div>


    </div>
  )
}

export default MyProfile