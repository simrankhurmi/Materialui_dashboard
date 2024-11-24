const express = require('express');
const app = express();
const port = 3000; // You can use any port

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get('/api/data', (req, res) => {
    const data = { message: 'Hello from the API!' };
    res.json(data);
  });
  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

  app.use((req, res, next) => {
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
