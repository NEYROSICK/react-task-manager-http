import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/tasks');
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (text, { rejectWithValue }) => {
    try {
      const response = await axios.post('/tasks', { text });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const removeTask = createAsyncThunk(
  'tasks/removeTask',
  async (taskID, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/tasks/${taskID}`);
      return response.data.id;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const checkTask = createAsyncThunk(
  'tasks/checkTask',
  async (task, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
