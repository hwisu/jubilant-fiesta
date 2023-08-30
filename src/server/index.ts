import express from 'express';
const app = express();
const port =  80;
import 'reflect-metadata';
import { AppDataSource } from "../models/data-source";
import * as StudentControllers from "../controllers/student.controllers";
import * as AdminControllers from "../controllers/admin.controllers";

app.use(express.json());
app.get('/health', (req: express.Request, res: express.Response)=>{
    res.status(200).send('Hello World');
});

// student controllers
app.post('/subscriptions', StudentControllers.postSubscription);
app.get('/subscriptions', StudentControllers.getSubscriptions);
app.delete('/subscriptions', StudentControllers.deleteSubscription);
app.get('/notices', StudentControllers.getNotices);

// admin controllers
app.post('/pages', AdminControllers.postPage);
app.post('/notices', AdminControllers.postNotice);
app.patch('/notices', AdminControllers.patchNotice);
app.delete('/notices', AdminControllers.deleteNotice);

AppDataSource.initialize().then(()=>{
    app.listen(port, ()=>{
        console.log(`Example app listening at http://localhost:${port}`);
    })
})