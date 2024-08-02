// src/adapters/httpAdapter.js

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export const httpAdapter = {
  get: async (url) => {
    try {
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  post: async (url, data) => {
    try {
      const response = await api.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  put: async (url, data) => {
    try {
      const response = await api.put(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  delete: async (url) => {
    try {
      await api.delete(url);
    } catch (error) {
      throw error;
    }
  },
};

export default httpAdapter;
