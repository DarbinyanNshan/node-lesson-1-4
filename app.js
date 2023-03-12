const express = require('express');
const app = express();
require('dotenv').config()

const { 
   getPosts,
   getPostsUser 
  } = require('./controllers/PostController');

const { 
  getComments,
  getCommentsId
 } = require('./controllers/CommentsController');

const { 
   PORT,
   HOST 
  } = require('./constants');



app.get('/posts', getPosts);
app.get('/posts/:userId', getPostsUser)

app.get('/comments', getComments);
app.get('/comments/:postId', getCommentsId )

app.listen(PORT, () => {
  console.log(`App listening on port http://${HOST}:${PORT}`)
})