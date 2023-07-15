import express from 'express';
const router = express.Router();

/* 
=================================
  Test Route {host}/api/Test/staticRoutes
=================================
*/

router.get('*', async (req, res) => {
  try {
    res.status(200).send('Hello World! - From the test route');
    
  } catch (err) {
    res.status(500).send(err)
  }
})

export default router;