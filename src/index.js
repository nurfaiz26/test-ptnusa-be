const express = require('express');
require('dotenv').config();
const cors = require('cors');

// config
const PORT = process.env.PORT || 5000;
const app = express();
const router = express.Router();
app.use(express.json());
app.use(cors({origin: true, credentials: true}));

// route
const pelangganRoutes = require('./routes/pelanggan');
app.use('/pelanggan', pelangganRoutes);
app.use('/*', function(req, res) {
    res.redirect('/pelanggan');
  });

app.listen(PORT, () => {
    console.log(`Server berhasil running di port ${PORT}`);
})