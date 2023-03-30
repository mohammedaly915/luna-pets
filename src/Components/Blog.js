import React from 'react'
import { Row } from 'react-bootstrap'
import Cardt from './Card'

function Blog() {
  return (<>
    <div className="blog">
        <div className="header">
            <h1>Latest News From our Blog</h1>
        </div>
        <div className="cards">
        <Row>
            <Cardt />
            <Cardt />
            <Cardt />
            </Row>
        </div>
    </div>

  </>
  )
}

export default Blog