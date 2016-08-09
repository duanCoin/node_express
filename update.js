var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/userInfo';

var updateData = function (db, callback) {
    var collection = db.collection('userInfo');

    var whereStr = {"name": 'lisi'};
    var updateStr = {$set: {"age": '100'}};
    collection.updateMany(whereStr, updateStr, {safe:true},function (err, result) {
        if (err) {
            console.log('Error' + err);
            return;
        }
        callback(result);
    });
}

MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("\n" + "******connect succeed*******" + "\n");
    updateData(db, function (result) {
        console.log("\n" + "update succeed" + "\n");
        console.log(result);

        db.close();
    });
});
module.exports = updateData;