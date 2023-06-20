"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const user_constant_1 = require("./user.constant");
const userSchema = new mongoose_1.Schema({
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: user_constant_1.userRoles,
        required: true
    },
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
    },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    budget: { type: Number, required: true },
    income: { type: Number, required: true },
}, {
    timestamps: true, // Mongodb will create 2 date(create and update) automatically in schema 
});
exports.User = (0, mongoose_1.model)('User', userSchema);
