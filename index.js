console.log("Chào mừng bạn đến với thế giới CI/CD!");

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const secret = process.env.APP_SECRET;
  if (!secret) {
    return res.status(500).json({ error: "Security Alert: APP_SECRET is missing!" });
  }
  res.json({
    message: "Chào mừng bạn đến với chuyên gia CI/CD!",
    security: "Active",
    timestamp: new Date().toISOString()
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;
