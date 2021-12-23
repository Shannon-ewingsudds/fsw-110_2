let jsdom = require('jsdom').JSDOM,

    uri = "/Users/shannonewing-sudds/node_modules/jsdom",

    options = {
        resources: "usable"
    };
jsdom.fromFile(uri, options).then(function(dom) {
    let window = dom.window,
        document = window.document;
    console.log(document.querySelector("h1").innerHTML);





    //catchphrase
}).catch(function(e) {
    console.log(e)
});