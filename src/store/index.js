import counterReducer from '../slices/counterSlice'
import {
    combineReducers,
    applyMiddleware,
    createStore
  } from "@reduxjs/toolkit";
  import createSagaMiddleware from "redux-saga";
  import rootSaga from '../sagas/saga'

  const sagaMiddleWare = createSagaMiddleware();

  const reducer = combineReducers({
    counter: counterReducer
  })

  const middleware = [sagaMiddleWare]
  
  const store = createStore(reducer, {}, applyMiddleware(...middleware))

sagaMiddleWare.run(rootSaga)

export default store