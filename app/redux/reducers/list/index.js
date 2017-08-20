import Immutable from 'immutable'

const initialState = [{
  title: 'hello',
  id: 1
}, {
  title: 'hello2',
  id: 2
}]

const list = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'TOGGLE_ITEM':
      return Immutable.fromJS(state).map(item => item.get('id') === action.id ? item.set('toggled', !item.get('toggled')) : item).toJS()
    default:
      return state
  }
}

export default list
