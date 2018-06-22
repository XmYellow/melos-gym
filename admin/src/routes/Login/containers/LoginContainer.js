import { connect } from 'react-redux'
import { login, loginAsync } from '../modules/LoginModules'
import LoginView from '../components/LoginView'

const mapDispatchToProps = {
  login,
  loginAsync
}

const mapStateToProps = (state) => ({
  access_token: state.access_token
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
