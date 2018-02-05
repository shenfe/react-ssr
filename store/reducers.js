import { CHANGE_FILTER } from './actions';


/*
 * reducers
 */

function listFilter(state = '', action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.text
    default:
      return state
  }
}

/*
 * reducer 合并
 */

export default function app(state = {}, action) {
  return {
    listFilterText: listFilter(state.listFilterText, action)
  }
};
