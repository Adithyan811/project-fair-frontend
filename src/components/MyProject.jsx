import React from 'react'
import AddProject from './AddProject'

function MyProject() {
  return (
    <div className='container p-3' >
         <div className='d-flex'>
            <h3>My Projects</h3>
            <div className='ms-auto'>
                  <AddProject/>
            </div>
        </div>    
            <div className='d-flex alidn-items-conten justify-content-between p-2 border'>
            <h5>Project Title</h5>
                   <div className="">
                    <button className='btn'><i className='fa-solid fa-pen'></i></button>
                    <button className='btn'><i className='fa-brands fa-github'></i></button>
                    <button className='btn'><i className='fa-solid fa-trash'></i></button>
                   </div>
            </div>

        </div>
  )
}

export default MyProject