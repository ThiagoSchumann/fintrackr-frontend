// src/controllers/accountsController.jsx

import { httpAdapter } from "../adapters/httpAdapter";
import Account from "../models/accountModel";

const API_URL = "/accounts/";

export const fetchAccounts = async () => {
  try {
    const data = await httpAdapter.get(API_URL);
    return data.map((account) => Account.fromApiResponse(account));
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw error;
  }
};

export const updateAccount = async (account) => {
  try {
    const payload = account.toApiPayload();
    const updatedData = await httpAdapter.put(
      `${API_URL}${account.id}/`,
      payload
    );
    return Account.fromApiResponse(updatedData);
  } catch (error) {
    console.error("Error updating account:", error);
    throw error;
  }
};

export const deleteAccount = async (accountId) => {
  try {
    await httpAdapter.delete(`${API_URL}${accountId}/`);
  } catch (error) {
    console.error("Error deleting account:", error);
    throw error;
  }
};

export const createAccount = async (account) => {
  try {
    const { id, ...payload } = account.toApiPayload();
    const createdData = await httpAdapter.post(API_URL, payload);
    return Account.fromApiResponse(createdData);
  } catch (error) {
    console.error("Error creating account:", error);
    throw error;
  }
};
