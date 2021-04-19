const mongoose = require('mongoose');

const StatementSchema = new mongoose.Schema({
    _idTenant: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    }
});

const Statement = mongoose.model('Statement', StatementSchema);

module.exports = {
    Statement
}