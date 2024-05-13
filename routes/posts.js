import { Router, json } from "express";
const router = Router();

import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/postController.js";

// app.get("/", (req, res) => {
//   //   res.send("<h1>Hello Hello</h1>");
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   //   res.send("<h1>What do you want to know?</h1>");
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

// Get all posts
router.get("/", getPosts);

// Get single post
router.get("/:id", getPost);

// Create new post
router.post("/", createPost);

// Update post
router.put("/:id", updatePost);

// Delete
router.delete("/:id", deletePost);

export default router;
