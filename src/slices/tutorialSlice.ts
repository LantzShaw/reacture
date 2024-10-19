import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface TutorialState {
  list: string[]
  loading: boolean
}

const initialState = {
  list: [],
  loading: false,
} as TutorialState

// Thunk Result需要 unwrap 一下
export const createTutorial = createAsyncThunk(
  'tutorials/create', // NOTE: 这个不是api接口路径, 只是个typeq前缀, tutorials对应的是这个slice的name
  async () => {
    //   const res = await TutorialDataService.create({ title, description });
    //   return res.data;
  }
)

//   export const retrieveTutorials = createAsyncThunk(
//     "tutorials/retrieve",
//     async () => {
//       const res = await TutorialDataService.getAll();
//       return res.data;
//     }
//   );

//   export const updateTutorial = createAsyncThunk(
//     "tutorials/update",
//     async ({ id, data }) => {
//       const res = await TutorialDataService.update(id, data);
//       return res.data;
//     }
//   );

//   export const deleteTutorial = createAsyncThunk(
//     "tutorials/delete",
//     async ({ id }) => {
//       await TutorialDataService.delete(id);
//       return { id };
//     }
//   );

//   export const deleteAllTutorials = createAsyncThunk(
//     "tutorials/deleteAll",
//     async () => {
//       const res = await TutorialDataService.deleteAll();
//       return res.data;
//     }
//   );

//   export const findTutorialsByTitle = createAsyncThunk(
//     "tutorials/findByTitle",
//     async ({ title }) => {
//       const res = await TutorialDataService.findByTitle(title);
//       return res.data;
//     }
//   );

const tutorialSlice = createSlice({
  name: 'tutorial',
  initialState,
  reducers: {},
  // NOTE: 参考文档: https://redux-toolkit.js.org/api/createAsyncThunk
  extraReducers(builder) {
    builder.addCase(createTutorial.fulfilled, (state, action) => {})
  },
  // NOTE: 这个方式不可用与上面的extraReducers不能同时存在
  //   extraReducers: {
  //     [createTutorial.fulfilled]: (state, action) => {},
  //   },
})

export default tutorialSlice.reducer
