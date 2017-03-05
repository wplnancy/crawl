var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/crawl");
//定义数据库的骨架模型

var MovieSchema = new mongoose.Schema({
    name: String,
    url: String
});

exports.Movie = mongoose.model("Movie", MovieSchema);
