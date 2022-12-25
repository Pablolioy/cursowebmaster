var pool = require('./bd');

async function getVideojuegos(){
    var query = "select * from videojuegos order by id desc"
    var rows = await pool.query(query);
    return rows;
}

async function getVideojuegosById(id){
    var query = "select * from videojuegos where id = ?"
    var rows = await pool.query(query,[id]);
    return rows[0];
}

async function deleteVideojuegoById(id){
    var query="delete from videojuegos where id = ?"
    var rows = await pool.query(query, [id]);
    return rows;
}

async function insertVideojuego(obj){
    try {
        var query = "insert into videojuegos set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function modificarVideojuegoById(obj, id){
    try{
        var query = "update videojuegos set ? where id=?";
        var rows = await pool.query(query,[obj, id]);
        return rows;
    } catch (error){
        throw error;
    }
}

module.exports={getVideojuegos,getVideojuegosById,deleteVideojuegoById,insertVideojuego,modificarVideojuegoById}