var pool = require('./bd');
var md5 = require('md5');

async function getUserByUsernameAndPassword(user, password) {
    try{
        var query = "select * from usuarios where nombre = ? and password = ? limit 1";
        console.log("usuario ",user)
        console.log("pass  ",md5(password))

        var rows = await pool.query(query, [user, md5(password)]);
        console.log("rows ",rows)
        return rows[0];
    } catch (error){
        throw error;
    }
}

module.exports= { getUserByUsernameAndPassword }