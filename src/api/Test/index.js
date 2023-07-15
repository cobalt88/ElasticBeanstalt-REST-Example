import express from 'express';
const router = express.Router();
import staticRoutes from './static.js';

router.use('/static', staticRoutes);

export default router;