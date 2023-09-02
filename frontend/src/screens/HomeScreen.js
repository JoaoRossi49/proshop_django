import React from 'react'
import {Row, Col} from 'react-bootstrap'
import products from '../products'

function HomeScreen() {
  return (
    <div>
      <h1>Listagem de produtos</h1>
      <Row>
        {products.map(product => (
            <Col>
                <h3>{product.name}</h3>
            </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
