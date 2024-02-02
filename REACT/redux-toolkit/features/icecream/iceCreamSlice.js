const createSlice = require('reduxjs/toolkit').createSlice

const initialState = {
    numOfIceCreams:10
}
const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: state => {
            state.numOfIceCreams--
        },
        restocked: (state,actions) => {
            state.numOfIceCreams += actions.payload
        }
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamSlice = iceCreamSlice.actions