const mongoose = require('mongoose');
const env = require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(`${process.env.DB_HOST}${process.env.DB_PASS}${process.env.DB_CLUSTER}`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Connexion succeded :) !');
    })
    .catch((e) => {
        console.log('Connexion failed : ' + e);
    });

// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
}

// TODO Connexion base impossible