"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./config/db");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const socket_1 = __importDefault(require("./config/socket"));
const taskController_1 = require("./controllers/taskController");
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = (0, socket_1.default)(server);
// Set the `io` instance for the task controller
(0, taskController_1.setSocketServerInstance)(io);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Database connection
(0, db_1.connectDB)();
// Routes
app.use('/api/user', userRoutes_1.default);
app.use('/api/task', taskRoutes_1.default);
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
