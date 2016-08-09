var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/userInfo';

var deleteData = function (db, callback) {
    var collection = db.collection('userInfo');

    var deleteStr = {"name": 'lisi'};

    collection.remove(deleteStr, function (err, result) {
        if (err) {
            console.log("Error:" + err);
            return;
        }
        callback(result);
    });
}

MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("\n" + "******connect succeed*******" + "\n");
    deleteData(db, function (result) {
        console.log("\n" + "delete succeed" + "\n");
        console.log(result);
        db.close();
    });
});
module.exports = deleteData;