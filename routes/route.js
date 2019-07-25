module.exports = (app) => {

    const produit = require('./../Controlleur/Controlleur.atelier');
    app.post('/atelier', produit.create);
    app.get('/atelier', produit.findAll);
    app.get('/atelier/:image', produit.lireImage);
    app.delete('/atelier/:_id', produit.delete_atelier);
    app.put('/atelier/:profilId', produit.modifier);
}