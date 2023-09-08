# social-media-rest-apis-examples

 ### user crud oprations =>

## User APIs 
### POST / user
- Create a user - atleast 5 users
- Create a user document from request body.
- Return HTTP status 201 on a succesful user creation. Also return the user document.
- The response should be a JSON object like [this](#successful-response-structure)
- Return HTTP status 400 if no params or invalid params received in request body.
-  The response should be a JSON object like [this](#error-response-structure)
  
 
### GET /users
- get all users of "users" collection

### PATCH/user/:Id
-update user details

### GET /users/:Id
- find user by its object id

### DELETE /users/:Id
-delete user by its object id


 ### post crud oprations =>

 ## User APIs 
### POST / post
- Create a post - atleast 5 users
- Create a post document from request body.
- Return HTTP status 201 on a succesful post creation. Also return the post document.
- The response should be a JSON object like [this](#successful-response-structure)
- Return HTTP status 400 if no params or invalid params received in request body.
-  The response should be a JSON object like [this](#error-response-structure)
  
 
### GET /posts
- get all posts from "post" collection and populate with user that creates post.

### PATCH/post/:Id
-update post details

### GET /post/:Id
- find post by its object id and populate all comments on it.

### DELETE /delete/:Id
-delete post by its object id.


### GET /:postId/comments
-find comments on particular posts using postId.


 ### comment crud oprations =>

 ## User APIs 
### POST / comment
- Create a comment - atleast 5 users
- Create a comment document from request body.
- Return HTTP status 201 on a succesful comment creation. Also return the comment document.
- The response should be a JSON object like [this](#successful-response-structure)
- Return HTTP status 400 if no params or invalid params received in request body.
-  The response should be a JSON object like [this](#error-response-structure)
  
 
### GET /comments
- get all comments from "comment" collection and populate with posts on it.

### PATCH/comments/:Id
-update commnets details.

### GET /:Id
- find comment by its object id and populate all post rellated to this comments and
-  also populates users which creates these comments.
-  
### DELETE /delete/:Id
-delete user by its object id.

