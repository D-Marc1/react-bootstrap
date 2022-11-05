import { useState } from 'react'

import { Link } from 'react-router-dom'

import ListGroup from 'react-bootstrap/ListGroup'

import reactLogo from './../assets/react.svg'
// import './../App.css'

import { fruits } from './../global'

export default function Index() {
  const links = fruits.map(({ id, url, name, imageURL }) => 
    <ListGroup.Item key={id}>
      <img
        src={imageURL}
        className="me-2"
        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
      />
      <Link to={`/fruits/${url}`}>{name}</Link>
    </ListGroup.Item>
  )

  return (
    <ListGroup className="mx-auto mt-4" style={{ width: '300px' }}>
      {links}
    </ListGroup>
  )
}
