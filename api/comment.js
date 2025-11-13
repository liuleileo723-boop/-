// api/comment.js
const AV = require('leancloud-storage');
const express = require('express');
const app = express();

app.use(express.json());

const APP_ID = process.env.LEANCLOUD_APP_ID;
const APP_KEY = process.env.LEANCLOUD_APP_KEY;
const MASTER_KEY = process.env.LEANCLOUD_APP_MASTER_KEY;

// 初始化 LeanCloud
AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
  masterKey: MASTER_KEY,
});

app.all('*', async (req, res) => {
  // 这里是 Waline 后端的请求处理代理，转发给 LeanCloud
  // 你可以直接把 waline 的 leancloud-waline 后端代码放到这里，或用官方的实现
  
  // 简单示例返回空（你需要替换成完整代码）
  res.status(200).json({message: 'Waline backend proxy'});
});

module.exports = app;
