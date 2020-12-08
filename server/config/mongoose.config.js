const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokesdb", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then( () => console.log("successfully connected to jokesdb "))
.catch( (err) => console.err(err));
