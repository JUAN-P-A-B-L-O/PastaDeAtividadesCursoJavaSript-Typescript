const express = require(`express`);
const router = express.Router();
const homes = require(`./src/controllers/paginainicial`);
const contato = require(`./src/controllers/contato`);
const estagio = require(`./src/controllers/estagio`);


router.get(`/`, homes.home);

router.get(`/estagio`, estagio.res);

router.get(`/contato`,contato.res );

module.exports = router;