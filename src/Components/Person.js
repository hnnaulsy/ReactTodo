import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as personActions from '../Store/Actions/Person.actions'

function Person(props) {
  return (
    <div>
      <button onClick={() => { props.addPerson({ id: 2, name: "syy" }) }}>新增用户</button>
      <ul>
        {
          props.person.map(item => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  person: state.person
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(personActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Person)