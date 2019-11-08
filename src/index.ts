import express from 'express';
import request from 'request';

const app = express();

const path = ''; // 要代理的路径
const host = ''; // 代理服务器

app.all('*', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type, Authorization'
  );
  next();
});

app.use(path, (req, res) => {
  const { originalUrl } = req;
  req.pipe(request(`https://${host}${originalUrl}`)).pipe(res);
});

app.listen(8080, function() {
  console.log('http://localhost:8080');
});
