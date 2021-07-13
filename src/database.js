import mongoose from "mongoose"

mongoose.connect("mongodb://localhost/apiDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is connected'))
    .catch(error => console.log(error))