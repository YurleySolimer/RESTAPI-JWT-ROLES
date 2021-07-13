import mongoose from "mongoose"

mongoose.connect("mongodb://localhost/apiDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
    .then(db => console.log('DB is connected'))
    .catch(error => console.log(error))