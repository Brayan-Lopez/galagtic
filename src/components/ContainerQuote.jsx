import React from 'react'
import HandleButton from './HandleButton'

const ContainerQuote = ({quote, handleNewCuote}) => {
  return (
      <div>
        <div className='wrapper'>
          <h1 className='title'>¡Datos Galácticos!</h1>
          <div className='container'>
          <article className='phrase'>
            <p>{quote.phrase}</p>
          </article>
          </div>
        </div>
        <HandleButton handleNewCuote={handleNewCuote}/>
        <article className='author'>
            <h4>Fuente: {quote.author}</h4>
          </article>
      </div>
  )
}

export default ContainerQuote