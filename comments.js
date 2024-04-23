// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Load the comments module
const comments = require('./comments');

// Register the comments module with the express app
app.use('/comments', comments);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
// Path: comments.js
// Create a router for comments
const express = require('express');
const router = express.Router();

// Define a route for getting all comments
router.get('/', (req, res) => {
  res.json([
    { id: 1, author: 'Bryan', text: 'First!' },
    { id: 2, author: 'You', text: 'I like this' },
    { id: 3, author: 'Me', text: 'Awesome' }
  ]);
});

// Export the router
module.exports = router;
// Path: server.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Load the comments module
const comments = require('./comments');

// Register the comments module with the express app
app.use('/comments', comments);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
// Path: comments.js
// Create a router for comments
const express = require('express');
const router = express.Router();

// Define a route for getting all comments
router.get('/', (req, res) => {
  res.json([
    { id: 1, author: 'Bryan', text: 'First!' },
    { id: 2, author: 'You', text: 'I like this' },
    { id: 3, author: 'Me', text: 'Awesome' }
  ]);
});

// Export the router
module.exports = router;
// Path: server.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Load the comments module
const comments = require('./comments');

// Register the comments module with the express app
app.use('/comments', comments);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
// Path: comments.js
// Create a router for comments
const
