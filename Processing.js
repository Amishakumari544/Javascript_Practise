// js dom to read
let minimist = require('minimist');
let fs = require('fs');
let jsdom = require('jsdom')

let args = minimist(process.argv);
fs.readFile(args.source,"utf-8",function(err,data){
    console.log(data);
    let JSDOM = new jsdom.JSDOM;
    let dom = new JSDOM(html);
    let document = dom.window.document;
})
console.log(args);