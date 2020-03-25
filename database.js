var con = require("./connection");

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
con.connect();
sorgu="select * from markers";
con.query(sorgu,function(hata,sonuc){
    console.log(hata);
});

con.end();