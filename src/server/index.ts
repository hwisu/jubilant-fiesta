import express from 'express';
const app = express();
const port =  80;
import 'reflect-metadata';
import { AppDataSource } from "../models/data-source";

app.use(express.json());
app.get('/health', (req: express.Request, res: express.Response)=>{
    res.status(200).send('Hello World');
});

AppDataSource.initialize().then(()=>{
    app.listen(port, ()=>{
        console.log(`Example app listening at http://localhost:${port}`);
    })
})