var fs = require('fs');
var marked = require('marked');
var jade = require('jade');


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

    var pageRenderer = jade.compileFile('views/page.jade');
    var html = pageRenderer(pageVars);
    fs.writeFile('index.html', html, function(err) {
        if(err){
            console.log(err);
        } else {
            console.log('done!');
        }
    });
});

