import { useParams } from 'react-router-dom'

import Alert from 'react-bootstrap/Alert'

import { fruits } from '@/global'

export default function Test() {
  const { url } = useParams()

  const { name, description, imageURL } =
    fruits.find((fruit) => fruit.url === url) ?? {}

  return (
    <Alert variant="success" className="mx-auto mt-4" style={{ width: '650px' }}>
      <Alert.Heading>Your fruit is: {name}</Alert.Heading>
      <p>{description}</p>
      <hr />

      <img
        src={imageURL}
        className="mx-auto d-block"
        style={{ maxWidth: '400px', objectFit: 'cover' }}
      />
    </Alert>
  )
}
