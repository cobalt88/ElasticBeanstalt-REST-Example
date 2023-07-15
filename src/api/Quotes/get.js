import { Quote } from "./random.js";
import express from 'express';
const router = express.Router();

/* 
======================================
  Quotes Routes {host}/api/Quotes/get
======================================
*/

router.get('/random', async (req, res) => {
  try {
    const randomQuote = await Quote.random();
    res.status(200).send(randomQuote);
  } catch (err) {
    res.status(500).send(err);
  }
})

router.get('/category/:category', async (req, res) => {
  try {
    const categoryQuote = await Quote.specificCategory(req.params.category);
    res.status(200).send(categoryQuote);
  } catch (err) {
    res.status(500).send(err);
  }
})

router.get('/author/:author', async (req, res) => {
  try {
    const authorQuote = await Quote.specificAuthor(req.params.author);
    res.status(200).send(authorQuote);
  } catch (err) {
    res.status(500).send(err);
  }
})

export default router;