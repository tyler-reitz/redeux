export const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        text: action.text,
        id: action.id,
        completed: false
      }
    case 'TOGGLE_TODO':
      console.log(state)
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}
