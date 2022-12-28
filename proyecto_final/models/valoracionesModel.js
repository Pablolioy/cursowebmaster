var pool = require('./bd')

async function getValoraciones(){
    var query = "select * from valoraciones order by id desc"
    var rows = await pool.query(query);
    return rows
}

async function insertValoraciones(obj){
    try {
        console.log(obj)
        var query = "insert into valoraciones set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
module.exports = {getValoraciones,insertValoraciones}