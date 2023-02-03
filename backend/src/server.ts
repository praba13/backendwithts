import express from 'express';

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('HALLO');
});

app.listen(PORT, () => {
  console.log(`Server Running Successfully on PORT ${PORT}!!!`);
});
