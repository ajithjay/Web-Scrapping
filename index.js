const request = require("request-promise")
const cheerio = require ("cheerio")
const fs = require("fs")
const json2csv = require("json2csv").Parser;
const CircularJSON = require("circular-json")


const questions = "https://stackoverflow.com/questions/tagged/python";

(async()=>{
   let ques = []
   const response = await request({
       uri: questions,
       headers : {
           "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9"
    },
       gzip : true

   });

   let $ = cheerio.load(response)


var q = $('div[class="summary"]>h3');
  var string =q.each(function(){
          console.log($(this).text());

      });

     const str = CircularJSON.stringify(string);
      JSON.parse(str)

  ques.push({
      str
  });

}



)();