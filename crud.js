const cors = require('cors'); 
const express = require('express');
const app = express();
const port = 9011;

msg = [];
app.use(cors());
app.use(express.json());
app.get('/msg', (req, res) => res.json(msg))
app.post('/msg', (req, res) => {
const msgx = {
	email : req.body.email,
	msg : req.body.msg 
};
if (!msgx.email || !msgx.msg) {
 return res.status(400).json({ error: 'Email y mensaje son requeridos.' });
    }
msg.push(msgx)
res.status(201).json(msgx);
});

app.listen(port, () => console.log(port));