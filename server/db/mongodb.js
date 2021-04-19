const mongoose = require('mongoose');

//Conexion con atlas

mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const connectDb = mongoose.connection;

connectDb.on("error", (error) => {
    console.log("Connection to DB error: ", error);
});

connectDb.once("open", () => {
    console.log("Connection to DB successful");
})

module.exports = connectDb;