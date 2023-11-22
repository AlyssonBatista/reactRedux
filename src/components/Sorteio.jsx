import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Sorteio = (props) => {
  const { min,max} = props

  function randomIntFromInterval(a, b) {  
    return Math.floor(Math.random() * (b - a + 1) + a)
  }
  return (
    <Card title='Sorteio dos Números' purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{randomIntFromInterval(min, max)}</strong>
        </span>
      </div>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
     min: state.numeros.min,
     max: state.numeros.max
  }
}

export default connect(mapStateToProps)(Sorteio)
