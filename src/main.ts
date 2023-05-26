import app from './app';
import { NODE_ENV, PORT } from './config';

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`======== ENV: ${NODE_ENV} =======`);
      console.log(`🚀 App listening on the port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
