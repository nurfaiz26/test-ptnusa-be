const dbPool = require('../config/database');

const getAllPelanggan = () => {
    const SQLQuery = 'SELECT * FROM pelanggan';

    return dbPool.execute(SQLQuery);
}

const getPelangganByKode = (kode) => {
    const SQLQuery = `SELECT * FROM pelanggan WHERE kode=${kode}`;

    return dbPool.execute(SQLQuery);
}

const createPelanggan = (body) => {
    const SQLQuery = `  INSERT INTO pelanggan (nama, alamat, kota, telepon, jenis, plafon) 
                        VALUES ('${body.nama}', '${body.alamat}', '${body.kota}', '${body.telepon}', '${body.jenis}', '${body.plafon}');`;

    return dbPool.execute(SQLQuery);
}

const updatePelanggan = (body, kode) => {
    const SQLQuery = `UPDATE pelanggan SET nama='${body.nama}', alamat='${body.alamat}', kota='${body.kota}', telepon='${body.telepon}', jenis='${body.jenis}', plafon='${body.plafon}' WHERE kode=${kode};`;                  

    return dbPool.execute(SQLQuery);
}

const deletePelanggan = (kode) => {
    const SQLQuery = `DELETE FROM pelanggan WHERE kode=${kode};`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllPelanggan,
    getPelangganByKode,
    createPelanggan,
    updatePelanggan,
    deletePelanggan
}