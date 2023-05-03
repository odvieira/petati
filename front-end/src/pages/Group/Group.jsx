import React from 'react'

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
    <div>
        <p>{id}</p>
        <p>{nome}</p>
        <p>{universidade}</p>
        <p>{campus}</p>
        <p>{cidade}</p>
        <p>{email}</p>
        <p>{site}</p>
        <p>{eixo}</p>
        <p>{temática}</p>
        <p>{anocriacao}</p>
        <p>{instagram}</p>
        <p>{facebook}</p>
        <p>{twitter}</p>
        <p>{youtube}</p>
        <p>{saibamais}</p>
        <p>{estado}</p>
        <p>{siteInstitucional}</p>
    </div>
  )
}

export default Group