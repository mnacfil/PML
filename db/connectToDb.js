const mongoose = require('mongoose');

const connectToDB = (uri) => {
    return mongoose.connect(uri);
}

module.exports = connectToDB;