import { connect } from 'react-redux';
import { addTodo } from '../actions';
import AddTodoForm from '../components/AddTodoForm';

export const mapStateToProps =  store => ({
  todos: store.todos
});

export const mapDispatchToProps = dispatch => ({
  handleSubmit: idea => {
    dispatch(addTodo(idea))}
});


export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
