var pool = require('./bd');

async function getImage() {
    var query = "select * from galeria order by id desc"
    var rows = await pool.query(query);
    return rows;
}

async function getImageById(id) {
    var query = "select * from galeria where id = ?";
    var rows = await pool.query(query,[id]);
    return rows[0];
}

async function modificarImageById(obj, id) {
    try {
        var query = "update galeria set ? where id=?";
        var rows = await pool.query(query, [obj, id])
        return rows;
    } catch (error) {
        throw (error)
    }
}

async function insertGaleria(obj){
    try {
        var query = "insert into galeria set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteGaleriaById(id){
    var query="delete from galeria where id = ?"
    var rows = await pool.query(query, [id]);
    return rows;
}

module.exports = { getImage, modificarImageById, getImageById, insertGaleria, deleteGaleriaById }