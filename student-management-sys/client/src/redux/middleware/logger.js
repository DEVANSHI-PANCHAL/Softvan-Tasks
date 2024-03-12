const loggerMiddleware = store => next => action => {
    console.log('Action:', action);
    console.log('State before:', store.getState());
    const result = next(action);
    console.log('State after:', store.getState());
    return result;
  };

  export default loggerMiddleware;