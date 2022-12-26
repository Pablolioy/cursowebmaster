var pool = require('./bd')

async function getValoraciones(){
    var query = "select * from valoraciones order by id desc"
    var rows = await pool.query(query);
    return rows
}

module.exports = {getValoraciones}