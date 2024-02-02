const redux = require('redux');
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const createStore = redux.createStore;
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

// Defining actions
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM'

// STEP 1 CREATING ACTION
// Creating an action object
// Creating an action creator
// An action creator is a function which returns an action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'to buy an ice cream'
    }
}

// STEP 2 CREATING REDUCER
// Reducers specify how the app's state changes in response to actions sent to the store
// It accepts state and an action as arguments and returns the next state of the application
// (previousState, action) => newState

// Defining initial state 
// const initialState = {
//     numOfCakes : 10,
//     numOfIceCreams:20
// }

//defining different states
const initialCakeState = {
    numOfCakes:10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// Reducer
//single reducer
// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: 
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1
//             };
//         case BUY_ICECREAM: 
//         return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams-1
//         }
//         default: 
//             return state;
//     }
// }

// multiple reducers
const cakeReducer = (state= initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes -1
            }
        default :
        return state
    }
}

const iceCreamReducer = (state= initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
            default: return state
    }


}
// STORE: HOLDS APP STATE
// It allows to access state by using getState()
// It allows state to be updated via dispatch(action)
// It registers listeners via subscribe(listener)
// It handles unregistering of listeners via the function returned by the subscribe(listener)

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream: iceCreamReducer
})
// const store = createStore(reducer)
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState())

store.subscribe(() => {
    console.log("Updated state", store.getState())
})

const unsubscribe = store.subscribe(() => {
    console.log("Updated state", store.getState())
})

store.dispatch(buyCake())
store.dispatch(buyIceCream())

unsubscribe();
