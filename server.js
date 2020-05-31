﻿import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import router from './routes';
import mongo from './pkg/database/mongo';


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/', router);
const database = new mongo();

const port = 5002;
const webServer = app.listen(port, () => {
    console.log(`DeviceEventService running on port: ${port}`); 
});

import mq from './pkg/mq/receiver';
import Repository from './pkg/repository/generic';
import PositionModel from './model/position';

mq.getInstance()
    .then(broker => {
        broker.subscribe('openfms.position', (msg, ack) => {
            Repository.add(PositionModel, JSON.parse(msg.content.toString()));
            ack();
        });
    });
