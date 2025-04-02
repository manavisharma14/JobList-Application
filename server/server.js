import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());


const PORT =  process.env.PORT || 8000;

app.post('/save', (req, res) => {
    console.log('Received data:', req.body);
    res.status(200).json({ message: 'Job data saved!' });
  });
  

// if u have to do something as soon as server starts
// react default port
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));