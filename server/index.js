const express = require('express');
// const cors = require('cors')
const app = express();
const port = 3000;
const cors = require('cors');
const axios = require('axios');
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use(cors());
app.use('/', express.static('public'));


app.use('/api/photoGallery', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));

app.use('/api/photoGallery', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

app.use('/api/houses/:id', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

app.use('/api/houses/random', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

app.use('/api/loans/:id', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

app.use('/api/loans/random', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

app.use('/api/taxes/:id', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

app.use('/api/taxes/state/:state', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

app.use('/api/listings', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));

app.use('/api/listing/like/:id', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));

app.use('/api/listing/unlike/:id', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));

app.use('/style.css', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
