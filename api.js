import express from 'express';
import npc from './models/npc.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import upload from './middleware/img.js';

const port = process.env.PORT || 3000;

const api = express();
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());
api.set('view engine', 'ejs');
api.use(express.static('public'));
api.use(cors())

api.get("/", (req, res) => {
    npc.findAll().then((npcs) => {
        res.render("index", {npcs: npcs});
    })
});

api.get("/createnpc", (req, res) => {
    res.render('npc')
});


api.get('/all/:id', (req, res) => {
    var id = req.params.id;
    npc.findAll({where: {id: id}}).then((npcs) => {
        res.render('allnpc', {npcs: npcs})
    })
})

api.get('/participantes', (req, res) => {
    res.render('participantes')
})

api.post('/npc', upload.single('image'), (req, res) => {
    var {name, description,link, type} = req.body;

    npc.create({
        name: name,
        description: description,
        link: link,
        type: type
    }).then(() => {
        res.redirect('/')
    }).catch((err) => {
        res.send(err)
    })
})


api.listen(port, () => {
    console.log('Listening on port ' + port);
});