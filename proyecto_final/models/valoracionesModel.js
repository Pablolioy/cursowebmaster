var pool = require('./bd')

async function getValoraciones(){
    var query = "select * from valoraciones order by id desc"
    var rows = await pool.query(query);
    return rows
}

async function getValoracionById(id) {
    var query = "select * from valoraciones where id = ?";
    var rows = await pool.query(query,[id]);
    return rows[0];
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

async function deleteValoracionById(id){
    var query="delete from valoraciones where id = ?"
    var rows = await pool.query(query, [id]);
    return rows;
}

async function modificarValidacionById(obj, id){
    try{
        var query = "update valoraciones set ? where id=?";
        var rows = await pool.query(query,[obj, id]);
        return rows;
    } catch (error){
        throw error;
    }
}

module.exports = {getValoraciones,getValoracionById,modificarValidacionById,insertValoraciones,deleteValoracionById}
