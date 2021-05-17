const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const { mongoose } = require('./db/mongoose');

const { Statement, Tenant } = require('./db/models/index');

// Parse application/json
app.use(bodyParser.json())
    .use(cors());



/** Tenant **/


/**
 * POST /datas
 * Create tenant
 */
app.post('/datas', (req, res) => {
    let apartment = req.body.apartment;
    let family = req.body.family;

    const newTenant = new Tenant({
        apartment,
        family
    });

    newTenant.save().then((tenantDoc) => {
        res.send(tenantDoc);
    })
});


/**
 * GET /datas/tenant
 * Permet de recupérer la liste des locataires
 */
app.get('/datas/tenant', (req, res) => {
    Tenant.find({}).then((tenantsDoc) => {
        res.send(tenantsDoc);
    }).catch((e) => {
        res.send(e);
    })
})


/**
 * DELETE /datas/tenant/:tenantId
 * Supprimer un locataire
 */
app.delete('/datas/tenant/:tenantId', (req, res) => {

    Tenant.findOneAndRemove(req.params.tenantId).then((tenantDoc) => {
        console.log('Tenant deleted');
        res.send(tenantDoc);
    })
})





/** Statements **/


/**
 * POST /datas/:tenantId
 * Ajouter un nouveau relevé
 */
app.post('/datas/:tenantId', (req, res) => {

    Tenant.findById(req.params.tenantId).then((tenant) => {

        let tenantId = tenant._id;
        let date = new Date();
        let value = req.body.value;

        const newStat = new Statement({
            _idTenant: tenantId,
            value: value,
            createdAt: date.toDateString()
        });

        newStat.save().then((statDoc) => {
            res.send(statDoc);
        })

    }).catch((e) => {
        console.error(e);
        res.send(e);
    });


    /*const newStat = new Statement({
        req.params.tenantId,
    })*/
})

/**
 * GET /datas/:tenantId
 * Recupérer tous les relevés du locataire
 */
app.get('/datas/:tenantId', (req, res) => {

    Statement.find({ _idTenant: req.params.tenantId}).then((tenantDoc) => {
        res.send(tenantDoc);
    }).catch((e) => {
        console.error(e);
        res.send(e);
    })
})

/**
 * GET /datas
 * Récuperer toutes les infos pours afficher à l'utilisateur
 * TODO Faire en sorte d'afficher la moyenne de consommation recupérer les moyennes des relevés de chaque locataire
 *
 */
app.get('/datas', async (req, res) => {

    const tenants = await Tenant.find({});
    let fullData = [];

    for (const tenant of tenants) {
        let tenantFullData = {
            "apartment": tenant.apartment,
            "family": tenant.family,
            "statements": []
        }

        const statements = await Statement.find({ _idTenant: tenant.id });
        let statementsAverage = 0;

        for (const statement of statements) {
            let statementsFulldata = {
                "value": statement.value,
                "createdAt": statement.createdAt
            }

            tenantFullData['statements'].push(statementsFulldata);

        }

        fullData.push(tenantFullData);
    }

    res.send(fullData);
})

/**
 * DELETE /datas/:tenantId/statement/:idStatement
 * Permet de supprimer le relevé d'un locataire
 */
app.delete('/datas/:tenantId/statement/:statementId', (req, res) => {

    Statement.findOneAndDelete({
        _id: req.params.statementId,
        _idTenant: req.params.tenantId
    }).then((statsDoc) => {
        console.log('ok');
        res.send(statsDoc);
    }).catch((e) => {
        res.send(e);
    })
})


















app.listen(3000, () => {
    console.log('Listening on port 3000 !');
})






/**
 * TODO
 *
 * - [x] GET: Recupérer tous les relevés du locataire
 * - [x] GET: Récupérer la liste des locataires
 * - [-] GET : Récupérer les moyennes des relevés de chaque locataire
 * - [x] POST : Créer un locataire
 * - [x] POST : Ajouter un relevé
 * - [x] DELETE : Supprimer un locataire
 * - [x] DELETE : Supprimer le relevé d'un locataire
 * - post: Envoyer des données
 * - patch: Modifier des données  (patch car on affichera pas une donnée mais plusieurs donc, pas dans l'URI
 *
 *
 *
 */