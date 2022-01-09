if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const cors = require('cors');

const productRoutes = require('./routes/products');
const supplierRoutes = require('./routes/suppliers');
const customerRoutes = require('./routes/customers');
const stakeholderRoutes = require('./routes/stakeholders');
const purchaseRoutes = require('./routes/purchases');
const saleRoutes = require('./routes/sales');
const transactionRoutes = require('./routes/transactions');
const settingRoutes = require('./routes/settings');

const DB_URL = process.env.DB_URL;

// Connect Mongoose
mongoose
  .connect(DB_URL || 'mongodb://localhost:27017/everlush')
  .then(() => console.log('Database connected...'))
  .catch((err) => {
    console.log('DATABASE CONNECTION ERROR!');
    console.log(err);
  });

// Set view engine and static folder
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cors());

app.get('/', (req, res) => {
  res.render('home');
});

// Routes
app.use('/products', productRoutes);
app.use('/stakeholders', stakeholderRoutes);
app.use('/suppliers', supplierRoutes);
app.use('/customers', customerRoutes);
app.use('/transactions', transactionRoutes);
app.use('/purchases', purchaseRoutes);
app.use('/sales', saleRoutes);
app.use('/settings', settingRoutes);

app.all('*', (req, res) => {
  res.redirect(404, 'errors/404');
});

const PORT = process.env.PORT || 316;
app.listen(PORT, () => {
  console.log(`On port http://localhost:${PORT}`);
});
