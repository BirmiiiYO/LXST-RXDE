import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IProductPriceSliceState {
  name: string
  value: string
}

const initialState: IProductPriceSliceState = {
  name: '',
  value: '',
}

export const ProductPriceSlice = createSlice({
  name: 'productPrice',
  initialState,
  reducers: {
    setProduct(state, action: PayloadAction<IProductPriceSliceState>) {
      state.name = action.payload.name
      state.value = action.payload.value
    },
  },
})

export default ProductPriceSlice.reducer
