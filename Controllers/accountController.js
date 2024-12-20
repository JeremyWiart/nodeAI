const accountView = require("../Views/accountView");
function showAccount(req,res){
    res.send(accountView(req.username));
}
module.exports = showAccount;