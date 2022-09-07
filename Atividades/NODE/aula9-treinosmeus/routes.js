const express = require(`express`);
const router = express.Router();
const homes = require(`./controllers/paginainicial`);
const contato = require(`./controllers/contato`);
const estagio = require(`./controllers/estagio`);


router.get(`/`, homes.home);

router.get(`/estagio`, estagio.res);

router.get(`/contato`,contato.res );

module.exports = router;