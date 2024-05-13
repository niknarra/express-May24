import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const port = process.env.PORT || 8000;
import logger from "./middleware/logger.js";
import posts from "./routes/posts.js";
import errorHandler from "./middleware/error.js";

// Get directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// setup static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/posts", posts);

// Error Handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
