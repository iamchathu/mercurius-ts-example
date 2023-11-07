import 'reflect-metadata';
import { app } from './server.js';

const port = 3000;

// const initialize = async () => {};

try {
  await app.listen({ port });
  console.info(`Server is ready at port ${port}`);
} catch (error) {
  console.error(error);
  process.exit(1);
}
