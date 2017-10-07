import { createActions, handleActions } from 'redux-actions'

// Default state
const defaultState = {
  all: [],
}

// Actions
const ADD = 'my-app/todos/ADD'

// Action Creators
export const { add } = createActions({
  ADD: title => title,
})

// Reducer
export default handleActions(
  {
    ADD: (state, action) => ({
      all: [...state.all, { title: `${action.payload} ${state.all.length}` }],
    }),
  },
  defaultState
)

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function doSomethingAsync () {
//   return dispatch => get('/widget').then(widget => dispatch(setWidget(widget)))
// }
