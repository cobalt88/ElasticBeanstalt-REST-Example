import express from 'express';
const router = express.Router();
import Quotes from './Quotes/index.js';
import Test from './Test/index.js';

router.use('/Quotes', Quotes);
router.use('/Test', Test);

export default router;

