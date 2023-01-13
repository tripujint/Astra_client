import { call, put } from 'redux-saga/effects'
import JobApi from '../../api/JobApi'
import { GetJobFailed, GetJobSuccess, GetOneJobFailed, GetOneJobSuccess, GetSearchJobFailed, GetSearchJobSuccess } from '../Action/JobAction'

function* handleGetJob(action) {
  try {
    const result = yield call(JobApi.List)
    yield put(GetJobSuccess(result))
  } catch (error) {
    yield put(GetJobFailed(error))
  }
}

function* handleGetOneJob(action) {
  const { payload } = action
  try {
    const result = yield call(JobApi.FindOne, payload)
    yield put(GetOneJobSuccess(result))
  } catch (error) {
    yield put(GetOneJobFailed(error))
  }
}

function* handleSearchJob(action) {
  const { payload } = action
  try {
    const result = yield call(JobApi.Search, payload)
    yield put(GetSearchJobSuccess(result))
  } catch (error) {
    yield put(GetSearchJobFailed(error))
  }
}

export {
  handleGetJob,
  handleGetOneJob,
  handleSearchJob
}