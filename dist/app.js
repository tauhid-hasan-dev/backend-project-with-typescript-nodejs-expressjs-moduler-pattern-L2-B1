"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const routes_1 = __importDefault(require("./routes"));
const http_status_1 = __importDefault(require("http-status"));
/* import ApiError from './errors/ApiError' */
const app = (0, express_1.default)();
// cors
app.use((0, cors_1.default)());
// parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// testing unhandled rejection
/* app.use('/', ()=>{
    Promise.reject(new Error ('Unhandled Promise Rejection'))
}) */
app.use('/api/v1/', routes_1.default);
app.use(globalErrorHandler_1.default);
//  handle not found route
app.get('/', (req, res) => {
    res.send('Cow-hut-by-tauhid-hasan: Server is running...........');
});
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: 'Not Found',
        errorMessage: [
            {
                path: req.originalUrl,
                message: 'API Not Found For Cow Hut',
            },
        ],
    });
    next();
});
exports.default = app;
