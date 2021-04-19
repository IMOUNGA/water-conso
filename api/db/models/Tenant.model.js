const mongoose = require('mongoose');

const TenantSchema = new mongoose.Schema({
    apartment: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },

    family: {
        type: String,
        required: true,
        minlength: 1
    }
});

const Tenant = new mongoose.model('Tenant', TenantSchema);

module.exports = {
    Tenant
}