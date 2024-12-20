const homeView = require("../Views/homeView");



function showHome(req,res){
        res.send(homeView(req.username));
}



module.exports = showHome;