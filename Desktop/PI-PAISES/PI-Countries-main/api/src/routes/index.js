const { Router } = require('express');
const { handlerCountry,
        handlerCountries,
        handlerCountriesxpai} = require('../handlers/countrieshandlers');
const {handlerActivitiesPost,handlerActivities} = require('../handlers/activitieshandlers');
        // Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", handlerCountry);
router.get("/countries", handlerCountries);
router.get("/countries/:id", handlerCountriesxpai);
router.post("/activities", handlerActivitiesPost);
router.get("/activities", handlerActivities);
module.exports = router;
