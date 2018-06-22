import { connect } from 'react-redux'
import { getUsers,addUser } from './../modules/UserModule'
import UserView from './../components/UserView'

const mapDispatchToProps = {
  getUsers,
  addUser
}

const mapStateToProps = state => ({
  users: state.admin.users
})

export default connect(mapStateToProps, mapDispatchToProps)(UserView)
