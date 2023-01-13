import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUsr from '../Constants/UsrConstant'
import * as ActionTypeJob from '../Constants/JobConstant'
import { handleUsrSignin,handleUsrSignout, } from "./UsrMidle";
import { handleGetJob, handleGetOneJob, handleSearchJob } from "./JobMidle";
function* watchAll(){
    yield all([
        takeEvery(ActionTypeUsr.GET_SIGNIN_REQUEST,handleUsrSignin),
        takeEvery(ActionTypeUsr.POST_SIGNOUT_REQUEST,handleUsrSignout),
        takeEvery(ActionTypeJob.GET_JOB_REQUEST,handleGetJob),
        takeEvery(ActionTypeJob.GETONE_JOB_REQUEST,handleGetOneJob),
        takeEvery(ActionTypeJob.SEARCH_JOB_REQUEST,handleSearchJob)
    ])
}

export default watchAll