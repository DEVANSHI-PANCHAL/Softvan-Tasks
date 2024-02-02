const { configureStore } = require('@reduxjs/toolkit');
const cakeReducer = require('../features/cake/cakeSlice');
const icecreamReducer = require('../features/icecream/iceCreamSlice');

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: icecreamReducer
    }
});

module.exports = store;
