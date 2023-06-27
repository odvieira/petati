import React from 'react'
import { Card, Col, ListGroup } from 'react-bootstrap'

const Group = ({
    id,
    nome,
    universidade,
    campus,
    cidade,
    email,
    site,
    eixo,
    temática,
    anocriacao,
    instagram,
    facebook,
    twitter,
    youtube,
    saibamais,
    estado,
    siteInstitucional }) => {
  
  return (
    <Col>
      <Card bg='dark' text='light' border='dark'>
        <Card.Title>
          {nome}
        </Card.Title>
        <ListGroup variant="dark">
          <ListGroup.Item variant='dark'>
            {id}
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            {universidade}
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            {campus}
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            {cidade}
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            {email}
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            {site}
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            {eixo}
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            {temática}
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            {anocriacao}
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            {instagram}
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            {facebook}
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            {twitter}
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            {youtube}
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            {saibamais}
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            {estado}
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            {siteInstitucional}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  )
}

export default Group