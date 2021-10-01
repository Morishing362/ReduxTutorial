import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.send('GET done!');
});

app.listen(4001, () => {
	console.log('The server is listening on port 4001');
});
