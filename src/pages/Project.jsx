import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProjectCard1 from '../components/ProjectCard1'


function Project() {
  return (
    <div>
      <div className="container">
        <h1 className='text-center'>All Projects</h1>
        <div className='d-flex justify-content-center'>
          <div className='d-flex border border-4 rounded bg-white mb-5'>
            <input type="text"  className='from-control' placeholder='search By Technology'/>
            <i class="fa-solid fa-magnifying-glass text-dark fs-3 p-2"></i>
          </div>

        </div>
        <div className='w-25'>
          <Row>
          <Col>
            <ProjectCard1/>
          </Col>
          </Row>
        </div>


      </div>
    </div>
  )
}

export default Project