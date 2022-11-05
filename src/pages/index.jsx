import { useState, useMemo } from 'react'

// Import Bootstrap components
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'

// Import the fruits array of objects
import { fruits } from '@/global'

export default function Index() {
  // Reactive variable. Array index [0] is variable, while array index [1] is the setter.
  const [searchText, setSearchText] = useState('')

  // Filter by search text, everytime searchText changes.
  const filteredFruits = useMemo(() => {
    return fruits.filter(({ name }) => name.toLowerCase().includes(searchText))
  }, [searchText])

  // The links to the fruits. Each item in the map correlates to a specific fruit object
  const links = filteredFruits.map(({ id, url, name, imageURL }) => 
    <ListGroup.Item key={id}>
      {/* The fruit image icon */}
      <img
        src={imageURL}
        className="me-2"
        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
      />
  
      {/* The link to the fruit page */}
      <a href={`/fruits/${url}`}>{name}</a>
    </ListGroup.Item>
  )

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand className="text-white" href="#">Navbar scroll</Navbar.Brand>

          {/* Navbar search */}
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
