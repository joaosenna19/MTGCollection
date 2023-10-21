import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.send({"message":"true"});
})

export default app;