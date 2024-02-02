const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/icecream/iceCreamSlice').iceCreamActions

console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log("updated state", store.getState())
})


store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))


store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.restocked(2))
unsubscribe();