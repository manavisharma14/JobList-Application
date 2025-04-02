import express from 'express';

const app = express();

const PORT =  process.env.PORT || 8000;

// if u have to do something as soon as server starts
// react default port
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));