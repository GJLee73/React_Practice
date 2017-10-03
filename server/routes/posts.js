import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req,res) => {
    //res.send('posts');
    res.sendFile (path.resolve('../react_server/public/post.html'));
});

router.get('/read/:id', (req, res) => {
    res.send('You are reading post ' + req.params.id);
});

export default router;