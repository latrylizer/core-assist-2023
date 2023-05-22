import { createSlice } from '@reduxjs/toolkit'

export const jobSlice = createSlice({
  name: 'Jobs',
  initialState: {
    Jobs: [],
  },
  reducers: {
    getJobs(state, payload) {
      state.Jobs = payload
    },
  },
})
export const { getJobs } = jobSlice.actions
export default jobSlice.reducer
