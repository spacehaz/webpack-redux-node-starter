import { connect } from 'react-redux'
import { itemToggled } from '../../actions/list'
import List from 'modules/list'

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//   }
// }

const mapStateToProps = state => {
  return {
    items: state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onItemClick: id => {
      dispatch(itemToggled(id))
    }
  }
}

const FinalList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default FinalList
