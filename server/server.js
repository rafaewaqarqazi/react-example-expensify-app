const express = require('express');
const app = express();
const path = require('path');

const publicDirectory= path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicDirectory));

app.get('*',(req, res)=>{
    res.sendFile(path.join(publicDirectory,'index.html'));
});

app.listen(port,()=>{
    console.log('Server in running on PORT 3000');
});