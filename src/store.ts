import { configureStore, Action, combineReducers } from '@reduxjs/toolkit';

// Define your reducers here
const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
