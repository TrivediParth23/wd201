const http = require("http");
const fs = require("fs");
const minimist = require("minimist")(process.argv.slice(1),{
    default:{
        port:5000
    }
        
});



let homeContent = "";
let projectContent = "";
let regContent= "";

fs.readFile("home.html",(err,home)=>{
    if (err) throw err;
    homeContent = home;
});

fs.readFile("project.html",(err,project)=>{
    if (err) throw err;
    projectContent = project;
});

fs.readFile("registration.html",(err,registration)=>{
    if (err) throw err;
    regContent = registration;
});

fs.readFile("home.html", (err,home) => {
    if (err) throw err ;
    http
        .createServer((request,response) => {
           let url =request.url;
           response.writeHeader(200,{"content-Type": "text/html"});
           switch(url){
            case "/project":
                response.write(projectContent);
                response.end();
                break;
            case "/registration":
                response.write(regContent);
                response.end();
            default:
                response.write(homeContent);
                response.end();
           }
        })

        .listen(minimist.port);
});
