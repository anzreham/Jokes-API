const jocke = require ("../controllers/jokes.controller");

module.exports = app =>{
app.get("/jockes", jocke.getAll);

app.get("/jockes/:_id", jocke.getOne);
app.post("/jockes", jocke.create);
app.put("/jockes/:_id", jocke.update);
app.delete("/jockes/:_id", jocke.delete);

}