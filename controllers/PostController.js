const Post = require('../models/Post.js');

// GET --> all post
const getAllPosts = (req, res) => {
  Post.find((err, posts) => {
    if(err) {
      res.status(500).json({err})
    }
    res.status(200).json({posts})
  })
}

// GET -> post by id
const getPostById = async (req, res) => {
  try {
    const id = req.params.id;
    let post = await Post.findById(id);
    res.json(post);
  } catch (error) {
    res.status(404).json({notfound: '포스트가 존재 하지 않습니다'})
  }
}


// POST -> create POST
const createPost = (req, res) => {
  const {title, content} = req.body;
  if(!title) {
    res.status(422).json({error: '제목을 작성해 주시기 바랍니다'})
  }

  if(!content) {
    res.status(422).json({error: '내용을 작성해 주시기 바랍니다'})
  }
  const newPost = new Post({
    title,
    content
  });
  newPost.save().then(post => res.json(post))
}


//  PUT ?? --> update POST
const updatePost = (req, res) => {
  const id = req.params.id;
  Post.findByIdAndUpdate(id, req.body, (err, post) => {
    if(err) {
      res.status(500).json({err});
    }
    res.status(201).json({post})
  })
}

// DELETE --> post by id
const deletePost = async (req, res, next) => {
  try {
    let post = await Post.findById(req.params.id);
    post.remove().then(() => res.json({'성공': '삭제 되었습니다'}))
  } catch (error) {
    res.json({Error: error.message})
  }
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
}