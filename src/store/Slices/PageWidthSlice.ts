import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IPageWidthState {
  isMobile: boolean
}

const initialState: IPageWidthState = {
  isMobile: false,
}

export const PageWidthSlice = createSlice({
  name: 'pageWidth',
  initialState,
  reducers: {
    setWidth(state, action: PayloadAction<boolean>) {
      state.isMobile = action.payload
    },
  },
})

export default PageWidthSlice.reducer
