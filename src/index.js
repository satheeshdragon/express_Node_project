import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

// app.use(express.static('public'))

// app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Hello World! satheesh');
// });

// app.post('/', function (req, res) {
//   res.send('Got a POST request')
// });

// app.get('/user', function (req, res) {
//   res.send('Got a PUT request at /user DATA MARK 1')
// })

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
