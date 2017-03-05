var express = require("express");
var app = express();
var Movie = require("./model").Movie;
app.set("view engine", "html");

var path = require("path");
app.set("views", path.resolve("views"));
app.engine('html', require("ejs").__express);

app.get("/", function (req, res) {
    //查数据 渲染页面
    Movie.find({}, function (err, movies) {
        res.render("index", {movies});
    })

});
app.listen(80);