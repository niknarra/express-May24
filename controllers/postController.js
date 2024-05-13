let posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
  { id: 4, title: "Post 4" },
];

// @desc Get All Posts
// @route /api/posts

export const getPosts = (req, res) => {
  //   console.log(req.query);
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
};

// @desc Get Single Post
// @route /api/posts/:id

export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => {
    return post.id === id;
  });
  if (!post) {
    const error = new Error(`A post with id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(post);

  //   res.status(200).json(
  //     posts.filter((post) => {
  //       return post.id === id;
  //     })
  //   );
};

// @desc Create a new post
// @route /api/posts/

export const createPost = (req, res) => {
  // const newPostTitle = JSON.stringify(req.body.title);
  // const newPostID = JSON.stringify(req.body.id);

  const newPost = {
    id: req.body.id,
    title: req.body.title,
  };

  if (!newPost.title) {
    return res.status(400).json({ msg: "Please include a title" });
  }

  posts.push(newPost);
  res.status(201).json(posts);
};

// @desc Create a new post
// @route /api/posts/

export const updatePost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(400).json({ message: "Enter a valid post ID" });
  }

  post.title = req.body.title;
  res.status(200).json(posts);
};

// @desc Delete a post
// @route /api/posts/:id

export const deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => {
    return post.id === id;
  });

  if (!post) {
    return res.status(404).json(`Cannot find a post with ID: ${id} to delete`);
  }

  posts = posts.filter((post) => {
    return post.id !== id;
  });
  res.status(200).json(posts);
};
