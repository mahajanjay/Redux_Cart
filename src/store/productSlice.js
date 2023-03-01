import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload;
        },

        setStatus(state, action) {
            state.status = action.payload;
        }
    }
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//Creating Thunk middleware



export function fetchProducts() {

    return async function fetchProductsThunk(dispatch, getState) {

        dispatch(setStatus(STATUSES.LOADING));

        try {
            const res = await axios.get('https://fakestoreapi.com/products');
            dispatch(setProducts(res.data));
            dispatch(setStatus(STATUSES.IDLE));

        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}