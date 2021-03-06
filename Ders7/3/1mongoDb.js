var should = require("should"); //  It keeps your test code clean, and your error messages helpful.
var monk = require("monk"); // a framework that makes accessing MongoDb really easy


var db = monk('mongodb://wsan@192.168.56.103:27017/OgrenciBilgiSistemi');
should.exists(db);
var collection = db.get("ogrenciler");
should.exists(collection);

// Ekleme

var kayit= {
    "ogrenciNo": "yxz",
    "adi": "Mehmet",
    "soyadi": "Şahin",
    "telefon": {
        "ev": "12345678",
        "is": "87654321"
    }
}


 collection.insert(kayit, function(err, doc){
	    	if(err)
	    	{
	    		console.log("HATA");
	    	}
	    	else
	    	{
	    		console.log("eklendi - ");
	    	}
	    });
	    



// Listeleme	    
collection.find({"ogrenciNo":"yxz"}, { limit : 100 }, function (err, docs){
  for(i=0;i<docs.length;i++)
    console.log(docs[i]);
});


// Silme
collection.remove({ ogrenciNo: '00000000002' }, function (err) {
    if (err) throw err;
});


// Güncelleme
var yeniKayit= {
    "ogrenciNo": "00000000001",
    "adi": "Ahsen",

}

collection.update({ogrenciNo: '00000000004'}, yeniKayit);

/*collection.findAndModify(
    {
        query: {ogrenciNo: req.params.ogrenciNo},

        update: { $set: {
            adi: req.body.adi,
            soyadi: req.body.soyadi
        }
        }
    },
    /!*{"new": true, "upsert": true},*!/
    function (err, doc) {
        if (err) throw err;
        console.log(doc);
    }
);*/



