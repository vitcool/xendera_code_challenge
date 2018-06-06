import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
// import storage from 'redux-persist/lib/storage';

export default (rootReducer, rootSaga) => {
  const middleware = [];
  const sagaMiddleware = createSagaMiddleware();

  middleware.push(sagaMiddleware);

  const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
};