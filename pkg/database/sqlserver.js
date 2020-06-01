const sql = require('mssql');

/*
    USAGE: 
    const query =
        `
        SELECT * FROM TableName 
        `;
    
    database.query_list(query, (err, records) => {
        console.log('test 1');
        // if (err != null) {
        //     return next(err);
        // }
        res.send(records);
    });
*/

module.exports = {
    query_list: (query, callback) => {
        return executeQuery(query, true, callback);
    },
    query_single: (query, callback) => {
        return executeQuery(query, false, callback);
    }
};

function executeQuery(query, isList, callback) {
    const config = {
        user: 'sa',
        password: '1234',
        server: 'db1',
        database: 'ABC',
        port: 1433
    }
    
    sql.connect(config, (err) => {
        new sql.Request()
            .query(query)
            .then( records => {
                console.log('test 3');
                callback(null, isList ? records.recordset : records[0]);
            })
            .catch(function (err) {
                console.log('test 4');
                console.log(err);
                callback(err, null);
            });
    });
}