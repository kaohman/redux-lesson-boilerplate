import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodoForm from '../components/AddTodoForm'

const mapStateToProps = (store) => {
  return {
    todos: store.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (id, text) => {
      dispatch(addTodo(id,text))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
