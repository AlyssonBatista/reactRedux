import React from 'react'
import Card from './card'
import './intervalo.css'


const Intervalo = () => {
  return (
    
      <Card title='Intervalo de números' red>
       <div className='intervalo'>
        <span>
            <strong> Mínimo:</strong>
            <input type="number" value={0} readOnly />
          </span>
          <span>
            <strong> Máximo:</strong>
            <input type="number" value={0} readOnly />
          </span>
       </div>
      </Card>
    
  )
}

export default Intervalo
