import { useState, useMemo } from 'react'

import { Link } from 'react-router-dom'

import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'

import { fruits } from '@/global'

export default function Index() {
  const [searchText, setSearchText] = useState('')

  const filteredFruits = useMemo(() => {
    return fruits.filter(({ name }) => name.toLowerCase().includes(searchText))
  }, [searchText])

  const links = filteredFruits.map(({ id, url, name, imageURL }) => 
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
    <>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand className="text-white" href="#">Navbar scroll</Navbar.Brand>

          <Form.Control
            type="search"
            value={searchText}
            placeholder="Search"
            className="me-2"
            style={{ width: '400px' }}
            aria-label="Search"
            onInput={(event) => setSearchText(event.target.value)}
          />
        </Container>
      </Navbar>

      <ListGroup className="mx-auto mt-4" style={{ width: '300px' }}>
        {links}
      </ListGroup>

    </>
  )
}
