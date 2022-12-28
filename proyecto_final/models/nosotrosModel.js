var pool = require('./bd');

async function getEmpleados(){
    var query = "select * from empleados order by id_emp desc"
    var rows = await pool.query(query);
    return rows;
}

async function getEmpleadoById(id){
    var query = "select * from empleados where id_emp = ?"
    var rows = await pool.query(query,[id]);
    return rows[0];
}

async function insertEmpleado(obj){
    try {
        var query = "insert into empleados set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {getEmpleados,getEmpleadoById,insertEmpleado}