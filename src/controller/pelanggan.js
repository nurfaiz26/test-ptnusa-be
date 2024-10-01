const pelangganModel = require('../models/pelanggan');

const getAllPelanggan = async (req, res) => {
    try {
        const [data] = await pelangganModel.getAllPelanggan();

        if(data[0] != null) {
            console.log(data)
            res.json({
                message: 'Get all pelanggan success',
                data: data
            });
        } else {
            res.status(404).json({
                message: 'Data not found!',
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }
}

const getPelangganByKode = async (req, res) => {
    const { kode } = req.params;

    try {
        const [data] = await pelangganModel.getPelangganByKode(kode);
       
        if(data[0] != null) {
            console.log(data)
            res.json({
                message: `Get pelanggan by kode = ${kode} success`,
                data: data
            });
        } else {
            res.status(404).json({
                message: 'Data not found!',
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }
}

const createPelanggan = async (req, res) => {
    console.log(req.body);
    const { body } = req;

    if(!body.nama || !body.alamat || !body.kota || !body.telepon || !body.jenis || !body.plafon) {
        return res.status(400).json({
            message: 'Bad request, wrong input!',
            data: null
        });
    }

    try {
        await pelangganModel.createPelanggan(body);

        res.status(201).json({
            message: 'Create new pelanggan success',
            data: req.body
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }

}

const updatePelanggan = async (req, res) => {
    const { kode } = req.params;
    const { body } = req;

    if(!body.nama || !body.alamat || !body.kota || !body.telepon || !body.jenis || !body.plafon || !kode) {
        return res.status(400).json({
            message: 'Bad request, wrong input!',
            data: null
        });
    }

    try {
        await pelangganModel.updatePelanggan(body, kode)
        res.json({
            message: 'Update pelanggan success',
            data: {
                kode: kode,
                ...body
            }
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }
}


const deletePelanggan = async (req, res) => {
    const { kode } = req.params;
    
    try {
        await pelangganModel.deletePelanggan(kode);
        res.json({
            message: 'Delete pelanggan success',
            data: null
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }

}

module.exports = {
    getAllPelanggan,
    getPelangganByKode,
    createPelanggan,
    updatePelanggan,
    deletePelanggan
};