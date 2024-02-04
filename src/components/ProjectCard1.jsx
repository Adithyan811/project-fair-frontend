import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import Titleimage from  '../Assests/OIP.jpg'




function ProjectCard1() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
                 <Card onClick={handleShow} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://wallpaperaccess.com/full/5137810.png" />
      <Card.Body>
        <Card.Title className='text-center'>Project Title</Card.Title>
       
      </Card.Body>
    </Card>

  

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <h3 className='text-center'>Project Details</h3>
                <Col>
                <img src={Titleimage} width={'100%'} alt="" />
                </Col>
                <Col>
                <h3>Project Title</h3>
                <span><p><b>Project Title</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quo velit accusamus eius libero similique voluptates cumque ducimus, odio magni debitis consectetur tempore incidunt laboriosam dicta tenetur facere ab amet.</p></span>

                <p>Language used : <span><b>React Node Express MongoDB</b></span> </p>

                


                </Col>

            </Row>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-evenly'>
          <a href='' variant="secondary" >
          <i class="fa-brands fa-github fa-beat-fade text-dark"></i>
          </a>
          <a href='' variant="primary" >
          <i class="fa-solid fa-link fa-beat-fade"></i>
          </a>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProjectCard1