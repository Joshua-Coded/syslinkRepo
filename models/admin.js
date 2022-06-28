const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },

    password: {
        type: Number,
        required: true
    
    },

    role: {
        type: String,
        lower: true,
        enum: ['ace','personerlist', 'examiner', 'accountant']
    }
})


const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;