import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch data from the API using Axios
export const fetchData = createAsyncThunk(
  "api/fetchData",
  async (_, rejectWithValue) => {
    try {
      const response = await axios.get(
        "https://api.awesome-privacy.xyz/categories"
      );
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const UsersList = createAsyncThunk("api/loginDetails", async (_,rejectWithValue) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data, "dtaa iss....??")
    return response.data;
  } catch (error) {
    return  rejectWithValue(error.message);
  }
});

export const TodoList = createAsyncThunk("api/TodoList", async (_,rejectWithValue) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(response.data, "dtaa iss123132131....??")
    return response.data;
  } catch (error) {
    return  rejectWithValue(error.message);
  }
});

// Create a slice
const dataSlice = createSlice({
  name: "api",
  initialState: {
    data: [],
    status: "idle",
    Loading:false,
    error: false,
    listing:[],
    todolist:[]
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.Loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.Loading = false;
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = true;
        state.error = action.error.message;
      });
      builder
      .addCase(UsersList.pending, (state) => {
        state.Loading = true;
      })
      .addCase(UsersList.fulfilled, (state, action) => {
        state.Loading = false;
        state.status = "succeeded";
        state.listing = action.payload || [];
      })
      .addCase(UsersList.rejected, (state, action) => {
        state.Loading = false;
        state.status = "failed";
        state.error = action.payload || action.error.message;
    });
    builder
    .addCase(TodoList.pending, (state) => {
      state.Loading = true;
    })
    .addCase(TodoList.fulfilled, (state, action) => {
      state.Loading = false;
      state.status = "succeeded";
      state.todolist = action.payload || [];
    })
    .addCase(TodoList.rejected, (state, action) => {
      state.Loading = false;
      state.status = "failed";
      state.error = action.payload || action.error.message;
  });
  },
});
export const { reset } = dataSlice.actions;

export default dataSlice.reducer;
