const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const assistantRoutes = require('./routes/assistant.route');

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
});

app.use(express.json());

app.use('/assistant', assistantRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));