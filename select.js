var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/userInfo';

var selectData = function (db, callback) {

    var collection = db.collection('userInfo');

    var whereStr = {"age": '20'};
    collection.find(whereStr).toArray(function (err, result) {
        if (err) {
            console.log('Error' + err);
            return;
        }
        callback(result);
    });
};

MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("\n" + "******connect succeed*******" + "\n");
    selectData(db, function (result) {
        console.log("\n" + "select succeed!" + "\n");
        console.log(result);
        db.close();
    });
});
module.exports = selectData;