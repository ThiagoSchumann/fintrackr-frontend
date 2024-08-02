// src/models/accountModel.js

export default class Account {
  constructor(id, name, type, balance) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.balance = balance;
  }

  static fromApiResponse(data) {
    return new Account(data.id, data.name, data.type, data.balance);
  }

  toApiPayload() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      balance: this.balance,
    };
  }
}
