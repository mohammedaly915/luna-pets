import React from 'react'
import Landing from './Landing'
import NavBar from './NavBar'
import Gallery from './Gallery'
import Choose from './Choose'
import Send from './Send'
import Video from './video'
import Acordion from './Acordion'
import Footer from './Footer'
import Insurance from './insurance'
import Blog from './Blog'
import { Container } from 'react-bootstrap'
import Feedbacks from './Feedbacks'
function Home() {
  return (
  <>
    <Landing/>
    <Gallery/>
    <Choose/>
    <Send/>
    <Feedbacks/>
    <Video/>
    <Container>
    <Acordion/>
    <Blog/>
    </Container>
    <Insurance/>
    <Footer/>
  </>
  )
}

export default Home