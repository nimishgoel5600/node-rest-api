var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var bookRouter = express.Router();


bookRouter.route('/Books')
    .get(function(req,res){
        var sendresponse = {json:'hello'};
        res.json(sendresponse);
    })
app.use('/api', bookRouter);

app.get('/', function(req, res) {
    res.send('welcome to my service');
});
app.listen(port, function() {
    console.log('Gulp is running my app on port:' + port);
})