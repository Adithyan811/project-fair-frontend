import React from 'react'
import { Col, Row } from 'react-bootstrap'
import MyProject from '../components/MyProject'
import MyProfile from '../components/MyProfile'


function Dashboard() {
  const existingUser = JSON.parse(sessionStorage.getItem('existingUser'))
  console.log(existingUser);
  return (
    <div>
      <div>
        <Row>
          <h2 className='m-3'>Welcome <span className='text-danger'>{existingUser.username}</span></h2>
          <Col>
          <MyProject/>
          </Col>
          <Col>
          <MyProfile/>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Dashboard