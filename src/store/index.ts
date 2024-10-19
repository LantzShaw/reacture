import { configureStore } from '@reduxjs/toolkit'
import {  TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'

import authReducer from '../slices/authSlice'
import tutorialReducer from '../slices/tutorialSlice'

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


// export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

const reducer = {
  auth: authReducer,
  tutorial: tutorialReducer
}

const store = configureStore({
  reducer,
  devTools: true,
})

