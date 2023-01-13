import * as ActionType from '../Constants/JobConstant'

export const GetJobRequest = () => ({
  type: ActionType.GET_JOB_REQUEST
})

export const GetJobSuccess = (payload) => ({
  type: ActionType.GET_JOB_SUCCESS,
  payload
})

export const GetJobFailed = (payload) => ({
  type: ActionType.GET_JOB_FAILED,
  payload
})

export const GetOneJobRequest = (payload) => ({
  type: ActionType.GETONE_JOB_REQUEST,
  payload
})

export const GetOneJobSuccess = (payload) => ({
  type: ActionType.GETONE_JOB_SUCCESS,
  payload
})

export const GetOneJobFailed = (payload) => ({
  type: ActionType.GETONE_JOB_FAILED,
  payload
})

export const GetSearchJobRequest = (payload) => ({
  type: ActionType.SEARCH_JOB_REQUEST,
  payload
})

export const GetSearchJobSuccess = (payload) => ({
  type: ActionType.SEARCH_JOB_SUCCESS,
  payload
})

export const GetSearchJobFailed = (payload) => ({
  type: ActionType.SEARCH_JOB_FAILED,
  payload
})