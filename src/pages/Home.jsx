import React from 'react'
import Titleimage from  '../Assests/OIP.jpg'
 import {Row , Col } from 'react-bootstrap'
import ProjectCard1 from '../components/ProjectCard1'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h1 className='text-center m-4'>Project Fair</h1>
                    <p style={{textAlign:'justify'}}>Project management is the use of specific knowledge, skills, tools and techniques to deliver something of value to people.The development of software for an improved business process, the construction of a building, the relief effort after a natural disaster, the expansion of sales into a new geographic market—these are all examples of projects.</p>
                    <div style={{textAlign:'center'}}>
                      <Link to={'/login'}>
                      <button className='btn btn-outline-dark m-3 rounded-pill-shadow '>Get started</button>
                      </Link>
                    </div>              
                </div>
                <div className="col-6">
                    <img src={Titleimage} style={{height:'400px',textAlign:'right'}} alt="" />
                </div>
            </div>
        </div>

        <div className="row">
          <div className="col">
            <h2 className='text-center m-4'>Explore our projects</h2>
            <marquee>
              <Row>
                <Col>
                    <ProjectCard1/>
                </Col>
                <Col>
                <ProjectCard1/>

                </Col>
                <Col>
                <ProjectCard1/>

                </Col>
              </Row>
            </marquee>
          </div>
        </div>
        <Link to={'/projects'}>
        <div className='text-center'>
        <button className='btn btn-outline-dark m-3 rounded-pill-shadow '>View Project</button>
        </div>
        </Link>




    </div>
  )
}

export default Home