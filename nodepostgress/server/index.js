import express from 'express';
import { connection } from './postgres/postgres.js';
import router from './view/Routes.js';
import cors from 'cors';
const app = express();
const PORT = 8000;
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


app.use(express.json());
app.use(cors());
app.use(router); 

const options = {
    definition:{
        openapi: '3.0.0',
        info: {
            title: "Node js application for CURD operation using postgres",
            version: '21.4.0'
        },
        servers:[
            {
               url: "http://localhost:8000"
            }
        ]
    },
    apis: ['./view/Routes.js']
}
const swaggerSpec = swaggerJSDoc (options)
app.use('/api/docs' , swaggerUi.serve , swaggerUi.setup(swaggerSpec))


app.listen(PORT, () => {
 console.log(`listening on port : ${PORT}`)
});

connection();