
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to rewrite URL to include .html if no extension is provided
app.use((req, res, next) => {
  // If URL doesn't have an extension and doesn't end with a slash (i.e., not a directory)
  if (!path.extname(req.url) && !req.url.endsWith('/')) {
    req.url = req.url + '.html';
  }
  next();
});

// Middleware to serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
