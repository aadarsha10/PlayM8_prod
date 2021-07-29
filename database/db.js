const mongoose = require('mongoose')

// var uri = "mongodb://127.0.0.1:27017/PlayM8"
var uri = "mongodb+srv://playm8:p%40ssword123@play-m8.b3c9f.mongodb.net/playM8?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const connection = mongoose.connection;

try {
    // Connect to the MongoDB cluster
    connection.once("open", function () {
        console.log("Database Connection Established Successfully..");
    });

    // Make the appropriate DB calls
    // connection.listDatabases(connection);

} catch (e) {
    console.error(e);
} finally {
    connection.close();
}