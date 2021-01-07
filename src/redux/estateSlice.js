import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    items:[],
    item: {},
    statusItems: 'idle',
    status: 'idle'
}

export const fetchItems = createAsyncThunk('estate/fetchItems', async ()=> {
    const response = await fetch('/api/items')
    return response.json()
})

export const fetchItemId = createAsyncThunk('estate/fetchItemId',async (estateId='')=>{
    const response = await fetch(`/api/item/${estateId}`)
    return response.json()
})

export const estateSlice = createSlice({
    name: 'estate',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchItems.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.items = action.payload
        },
        [fetchItems.pending]: (state,action) => {
            state.status = 'loading'
        },
        [fetchItems.rejected]: (state,action) => {
            state.status = 'failed'
        },
        [fetchItemId.fulfilled]: (state, action) => {
            state.statusItems = 'succeeded'
            state.item = action.payload
        },
        [fetchItemId.pending]: (state,action) => {
            state.statusItems = 'loading'
        },
        [fetchItemId.rejected]: (state,action) => {
            state.statusItems = 'failed'
        }
    }
})

export const selectEstateUrl = state => state.reducer.item.url
export const selectEstate = state => state.reducer.item
export const selectStatusEstate = state => state.reducer.statusItems
export const selectAllEstate = state => state.reducer.items
export const selectStatus = state => state.reducer.status
export const {  } = estateSlice.actions
export default estateSlice.reducer