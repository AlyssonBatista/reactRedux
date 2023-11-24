import React from 'react'
import Card from './Card'
import './Intervalo.css'
import {connect} from 'react-redux'
import { alterarNumeroMinimo } from '../actions/numeros.js'

const Intervalo = (props) => {
  const {min,max} = props;
  

  return (
    
      <Card title='Intervalo de números' red>
       <div className='intervalo'>
        <span>
            <strong> Mínimo: { }</strong>
            <input type="number" value={min} onChange={e => props.alteraNumero(+e.target.value)} />
          </span>
          <span>
            <strong> Máximo:</strong>
            <input type="number" value={max} readOnly />
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

const mapActionCreatorsToProps = (dispatch) => {
  return{
    alteraNumero(novoNumero){
      const action = alterarNumeroMinimo(novoNumero)
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps,mapActionCreatorsToProps)(Intervalo)
