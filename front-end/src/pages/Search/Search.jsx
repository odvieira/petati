import React, { useState, useEffect } from 'react'
import Group from '../GroupCard/GroupCard'

import './Search.css'
import { Form, InputGroup, Row } from 'react-bootstrap'

const Search = () => {
  const [petGroups, setPetGroups] = useState([])
  const [filteredPetGroups, setFilteredPetGroups] = useState([])

  const handleSearchInput = (e) => {
    let f = e.target.value

    if(f === '')
      setFilteredPetGroups(petGroups)
    else {
      setFilteredPetGroups(
        petGroups.filter(item =>
          item['nome'].toLowerCase().includes(f.toLowerCase()) ||
          item['universidade'].toLowerCase().includes(f.toLowerCase())
        )
      )
    }
  }

  useEffect(() => {
    fetch('http://127.0.0.1:5000/')
    .then(response => response.json())
    .then(petGroups => {
      setPetGroups(petGroups)
      setFilteredPetGroups(petGroups)
    })
  }, []);

  return (
    <div>
      <div>
        <InputGroup className="mb-3">
          <Form.Control        
            placeholder="Filtrar resultados..."
            aria-label="Filtro"
            aria-describedby="basic-filter"
            onChange={ e => handleSearchInput(e) }
            
          />
        </InputGroup>
      </div>
      <div className='search-result'>
        <Row xs={1} md={3} className="g-4">
          { filteredPetGroups.map(item => {
            return(
              <Group
                key = {item['id']}
                id = {item['id']}
                nome = {item['nome']}
                universidade = {item['universidade']}
                campus = {item['campus']}
                cidade = {item['cidade']}
                email = {item['email']}
                site = {item['site']}
                eixo = {item['eixo']}
                temática = {item['temática']}
                anocriacao = {item['anocriacao']}
                instagram = {item['instagram']}
                facebook = {item['facebook']}
                twitter = {item['twitter']}
                youtube = {item['youtube']}
                saibamais = {item['saibamais']}
                estado = {item['estado']}
                siteInstitucional = {item['siteInstitucional']}
              />
            )
          })}
        </Row>
      </div>
    </div>
  )
}

export default Search