"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const validateRequest_1 = __importDefault(require("../../../middlewares/validateRequest"));
const user_validation_1 = require("./user.validation");
const userRouter = express_1.default.Router();
userRouter.post('/auth/signup', (0, validateRequest_1.default)(user_validation_1.UserValidation.createUserZodSchema), user_controller_1.UserController.createUser);
userRouter.get('/users', user_controller_1.UserController.getAllUser);
userRouter.get('/users/:id', user_controller_1.UserController.getSingleUser);
userRouter.delete('/users/:id', user_controller_1.UserController.deleteSingleUser);
userRouter.patch('/users/:id', (0, validateRequest_1.default)(user_validation_1.UserValidation.updateUserZodSchema), user_controller_1.UserController.updateSingleUser);
exports.UserRoutes = userRouter;
