import { useParams } from 'react-router-dom'

// Import Bootstrap components
import Alert from 'react-bootstrap/Alert'

// Import the fruits array of objects
import { fruits } from '@/global'

export default function Test() {
  // Correlates to the name of the file. In this case, it's called [url].jsx, so { url } is the name.
  const { url } = useParams()

  // Get the specific fruit object that correlates to the url
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
