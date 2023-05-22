import { createSlice } from '@reduxjs/toolkit'
export const applicantSlice = createSlice({
  name: 'Applicants',
  initialState: {
    Applicants: [],
  },
  reducers: {
    getApplicant(state, payload) {
      state.Applicants = payload
    },
  },
})
export const { getApplicant } = applicantSlice.actions
export default applicantSlice.reducer
