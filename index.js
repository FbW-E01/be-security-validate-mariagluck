import express from 'express';
import { validationResult } from 'express-validator';
import birdsValidators from './validators/birdsValidators.js';

const server = express();
server.use(express.json());

server.use((req, res, next) => {
    console.log(`[Req] ${req.method} ${req.path}`);
    next();
});

let birdsList = [];

server.post('/birds', 
        birdsValidators, 
        (req, res) => {
            birdsList.push(req.body);
            console.log(req.body);

            const result = validationResult(req);
            if (!result.isEmpty()) {
                res.status(400);
                res.json({
                    errors: result.errors.map(e => e.msg)
                });
                return;
            }          
            res.send("Your bird sighting has been logged!");
    }
);

server.get("/birds",  (req, res) => {
    res.send(birdsList);
});



server.listen(9005, () => {
    console.log("Listening on http://localhost:9005");
})
