import mongoose from 'mongoose';

class Database {
    constructor() {
        mongoose.connect('mongodb://localhost:27017/openfms', { useNewUrlParser: true, useUnifiedTopology: true });
        const connection = mongoose.connection;
        
        connection.once('open', function () {
            console.log('Connected to MongoDB');
        });
    }
}

export default Database;