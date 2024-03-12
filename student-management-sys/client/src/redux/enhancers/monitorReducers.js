const monitorReducersEnhancer = createStore => (reducer, initialState, enhancer) => {
    const monitoredReducer = (state, action) => {
      console.log('Action:', action.type);
      console.log('State before:', state);
      const newState = reducer(state, action);
      console.log('State after:', newState);
      return newState;
    };
  
    return createStore(monitoredReducer, initialState, enhancer);
  };
  export default monitorReducersEnhancer;