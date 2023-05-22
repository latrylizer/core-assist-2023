import { configureStore } from '@reduxjs/toolkit'
import applicantReducer from './Reducers/applicants'
import jobReducer from './Reducers/jobs'

export const store = configureStore({
  reducer: {
    Collections: applicantReducer,
    JobCollection: jobReducer,
  },
})
