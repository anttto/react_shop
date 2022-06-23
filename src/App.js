/* eslint-disable */

import { useState } from 'react'
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap'
import './App.css'
import data from './data'
import Detail from './pages/Detail'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'


function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">A-Market</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate("/detail") }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate("/about") }}>About</Nav.Link>
            <Nav.Link onClick={() => { navigate("/event") }}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <Container>
              <Row>
                {
                  shoes.map(function (a, i) {
                    return (
                      < List shoes={shoes[i]} i={i} key={i} navigate={navigate} />
                    )
                  })
                }
              </Row>
            </Container>
          </>
        } />

        <Route path="/detail/:id" element={< Detail shoes={shoes} />} />

        <Route Route path="/about" element={< About />}>
          <Route path="member" element={<div>멤버임</div>}></Route>
          <Route path="location" element={<div>위치정보임</div>}></Route>
        </Route >

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일 기념 쿠폰 받기</div>}></Route>
        </Route>

      </Routes >

      <Routes>
        <Route path="/global" element={<Global />}>
          <Route path="en" element={<div>영어임</div>}></Route>
          <Route path="ja" element={<div>일본어임</div>}></Route>
        </Route>
      </Routes >

    </div >
  );
}

function Global() {
  return (
    <div>
      <h4>글로벌 페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function List(props) {
  return (
    <Col sm onClick={() => { props.navigate('/detail/' + props.i) }} >
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </Col >
  )
}


export default App;


