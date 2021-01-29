const express = require('express');
// const cors = require('cors')
const app = express();
const port = 3000;
const cors = require('cors');
const axios = require('axios');
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use(cors());
app.use('/', express.static('public'));

app.use('/api/photoGallery', createProxyMiddleware({ target: 'http://ec2-13-52-97-136.us-west-1.compute.amazonaws.com:3002', changeOrigin: true }));

app.use('/houses', createProxyMiddleware({ target: 'http://ec2-52-35-16-109.us-west-2.compute.amazonaws.com:3001', changeOrigin: true }));

app.use('/loans', createProxyMiddleware({ target: 'http://ec2-52-35-16-109.us-west-2.compute.amazonaws.com:3001', changeOrigin: true }));

app.use('/taxes', createProxyMiddleware({ target: 'http://ec2-52-35-16-109.us-west-2.compute.amazonaws.com:3001', changeOrigin: true }));

app.use('/api/listings', createProxyMiddleware({ target: 'http://ec2-3-129-216-135.us-east-2.compute.amazonaws.com:3003', changeOrigin: true }));

app.use('/api/listing/like/:id', createProxyMiddleware({ target: 'http://ec2-3-129-216-135.us-east-2.compute.amazonaws.com:3003', changeOrigin: true }));

app.use('/api/listing/unlike/:id', createProxyMiddleware({ target: 'http://ec2-3-129-216-135.us-east-2.compute.amazonaws.com:3003', changeOrigin: true }));

app.use('/style.css', createProxyMiddleware({ target: 'http://ec2-3-129-216-135.us-east-2.compute.amazonaws.com:3003', changeOrigin: true }));

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
