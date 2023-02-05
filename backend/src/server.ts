import { connectDB } from './config/db';
import app from './app';
import env from './utils/validateEnv';

const PORT = env.PORT || 6000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server Running Successfully on PORT ${PORT}!!!`);
});
