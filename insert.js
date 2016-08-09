var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/userInfo';

var insertData = function (db, callback) {
    var collection = db.collection('userInfo');
    var data = [{"name": 'qqq', "sex": 'nan', "age": '18', "github": 'www.github.com/lisi'},

                {"name": 'sss', "sex": 'nan', "age": '19', "github": 'www.github.com/wangmazi'}
    ];

    collection.insert(data, function (err, result) {
        if (err) {
            console.log('Error:' + err);

            return;
        }
        callback(result);
    });
};

MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("\n" + "******connect succeed*******" + "\n");
    insertData(db, function (result) {
        console.log("\n" + "insert succeed" + "\n");
        console.log(result);

        db.close();
    });
});
module.exports = insertData;

