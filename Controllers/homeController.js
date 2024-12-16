const homeView = require("../Views/homeView");

function showHome(req,res){
    res.send(homeView());
}

module.exports = showHome;