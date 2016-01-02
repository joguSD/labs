var fs = require('fs');
var marked = require('marked');
var express = require('express');

var app = express();
app.use(express.static(__dirname + '/bower_components'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
    }
});

app.get('/', function (req, res) {
    fs.readFile('ex.md', 'utf8', function(err, md) {
        var markdown = marked(md);
        var tokens = marked.lexer(md);
        var questions = tokens.filter(function(token){
            return token.type === 'heading' && token.depth === 4
        });

        var pageVars = {
            content: markdown,
            questions: questions
        };

        res.render('page.jade', pageVars);
    });
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Labs cms running on %s:%s', host,port);
});
