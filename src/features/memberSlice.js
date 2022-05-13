import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const getMembers = createAsyncThunk(
  'members/getMembers',
  async (key) => {
    const response = await axios.get(`http://localhost:5000/members?q=${key}`);
    return response.data;
  }
);

export const addMember = createAsyncThunk('members/addMember', async ({name, gender, birth, address, status}) => {
  const response = await axios.post('http://localhost:5000/members', {name, gender, birth, address, status});
  return response.data;
});

export const editMember = createAsyncThunk('members/editMember', async ({id, name, gender, birth, address, status}) => {
  const response = await axios.patch(`http://localhost:5000/members/${id}`, {name, gender, birth, address, status});
  return response.data;
});

export const deleteMember = createAsyncThunk('members/deleteMember', async (id) => {
  await axios.delete(`http://localhost:5000/members/${id}`);
  return id;
});

const memberEntity = createEntityAdapter({
  selectId: (member) => member.id,
});

const memberSlice = createSlice({
  name: 'member',
  initialState: memberEntity.getInitialState(),
  extraReducers: {
    [getMembers.fulfilled]: (state, action) => {
      memberEntity.setAll(state, action.payload);
    },
    [addMember.fulfilled]: (state, action) => {
      memberEntity.addOne(state, action.payload);
    },
    [editMember.fulfilled]: (state, action) => {
      memberEntity.updateOne(state, {
        id: action.payload.id,
        updates: action.payload
      })
    },
    [deleteMember.fulfilled]: (state, action) => {
      memberEntity.removeOne(state, action.payload);
    }
  },
});

export const memberSelectors = memberEntity.getSelectors(
  (state) => state.member
);
export default memberSlice.reducer;
