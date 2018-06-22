import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider, connect } from 'react-redux'
import PropTypes from 'prop-types'
class App extends React.Component {
  static PropTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.array.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{height: '100%', minWidth: '1366px'}}>
          <Router history={browserHistory} children={this.props.routes}/>
        </div>
      </Provider>
    )
  }
}

export default App
