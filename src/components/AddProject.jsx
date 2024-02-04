import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img from '../Assests/OIP.jpg'
import { addProjectAPI } from '../services/allAPIs';

function AddProject() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    //to hold the token
    const [token,setToken] = useState("")

    useEffect(()=>{
      if(sessionStorage.getItem("token")){
        setToken(sessionStorage.getItem("token" ))
      }
    },[])

   //to hold the project details
    const [projectDetails,setProjectDetails] = useState({
      title:"",language:"",link:"",overview:"",projectImage:""
    })
    console.log(projectDetails);
    //to hold the image url
    const [preview,setPreview] = useState("")
    console.log(preview);

    useEffect(()=>{
      if(projectDetails.projectImage){
        setPreview(URL.createObjectURL(projectDetails.projectImage))
      }
    },[projectDetails.projectImage])
    const projectAdd=async()=>{
      const{title,language,github,link,overview,projectImage}=projectDetails
      if(!title||!language ||!github||!link||!overview||!projectImage){
    alert('please enter details')
      }
      else{
        //api call
        const reqBody = new FormData()
        reqBody.append("title",title)
        reqBody.append("language",language)
        reqBody.append("github",github)
        reqBody.append("link",link)
        reqBody.append("overview",overview)
        reqBody.append("projectImage",projectImage)

        const reqHeader={
          "Content-Type":"multipart/form-data", //resq contains a file upload content(image)
          "Authorization":`Bearer ${token}`//req contains token for backend
        }

        //api call
        const result = await addProjectAPI(reqBody,reqHeader)
        console.log(result);
        if(result.status === 200){
          console.log(result.data);//successfull
          alert("project added succesfully")
        }
        else{
          alert(result.response.data)
          console.log(result.response.data);//error message
        }

      }
    }
  return (
    <div>
        <button className='btn btn-success' onClick={handleShow}>Add project</button>
        
      <Modal
       show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        >
        <Modal.Header closeButton>
          <Modal.Title>Project Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col">
                <label>
        <input type="file" style={{display:'none'}} onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}/>
        <img src={preview?preview:img} width={'100%'} alt=""   />

      </label>
                </div>
                <div className="col">
                  <div className="inp">
                    <input type="text" value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} placeholder='Project Title' className='form-control mb-3' />
                    <input type="text" value={projectDetails.language} onChange={e=>setProjectDetails({...projectDetails,language:e.target.value})} placeholder='Language' className='form-control mb-3' />
                    <input type="text" value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})} placeholder='Github Link' className='form-control mb-3' />
                    <input type="text" value={projectDetails.link} onChange={e=>setProjectDetails({...projectDetails,link:e.target.value})} placeholder='Website Link' className='form-control mb-3' />
                    <input type="text" value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})} placeholder='Project Description' className='form-control mb-3' />

                  </div>
                </div>

            </div>
        </Modal.Body>
        <Modal.Footer>
         <div >
         <Button variant="primary" onClick={projectAdd}>
            Add
          </Button>
         </div>

        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject