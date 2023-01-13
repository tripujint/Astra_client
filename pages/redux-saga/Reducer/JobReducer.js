import * as ActionType from '../Constants/JobConstant'

const INIT_STATE  = {
  jobs: [],
  job: []
}

const JobReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_JOB_REQUEST:
      return {...state}
    case ActionType.GET_JOB_SUCCESS:
      return getJobSuccess(state, action)
    case ActionType.GETONE_JOB_REQUEST:
      return {...state}
    case ActionType.GETONE_JOB_SUCCESS:
      return getOneJobSuccess(state, action)
    case ActionType.SEARCH_JOB_REQUEST:
      return {...state}
    case ActionType.SEARCH_JOB_SUCCESS:
      return getSearchJob(state, action)
    default:
      return state
  }
}

const getJobSuccess = (state, action) => {
  return {
    ...state,
    jobs: action.payload
  }
}

const getOneJobSuccess = (state, action) => {
  return {
    ...state,
    job: action.payload
  }
}

const getSearchJob = (state, action) => {
  return {
    ...state,
    jobs: action.payload
  }
}

export default JobReducer