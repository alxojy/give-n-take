import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import user from './routes/user.js';
import cashDonations from './routes/cashDonations.js';
import requests from './routes/requests.js';
import items from './routes/items.js';
import donation from './routes/donation.js';
import dummy from './routes/dummy.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

// routes
app.use('/user', user);
app.use('/cash_donations', cashDonations);
app.use('/requests', requests);
app.use('/items', items);
app.use('/donation', donation);
app.use('/dummy', dummy);

const CONNECTION_URL = 'mongodb+srv://admin2:admin@cluster0.yh2tz.mongodb.net/db?retryWrites=true&w=majority'
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);