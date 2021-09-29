let axios = require('axios');
let args = require('minimist');
let fs = require('fs');
let download = axios.get(args.url);
download.then(function(res){
    let html = res.date;
    fs.writeFileSync(args.dest,html,"utf-8");

}).catch(function(err){
    console.log(err);
})