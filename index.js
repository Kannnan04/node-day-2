import express, {json} from 'express';
import cors from 'cors';
import createRoom from './Routers/createRoom.js';

const app = express();
const PORT =4000;
app.use(cors())
app.use(express.json())


// routers connection

app.use('/api',createRoom)









app.listen(PORT,() =>{
    console.log("running", PORT);
})