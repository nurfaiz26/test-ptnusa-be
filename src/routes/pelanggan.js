const express = require('express');

const pelangganController = require('../controller/pelanggan');

const router = express.Router();

// READ - GET
router.get("/", pelangganController.getAllPelanggan);
router.get("/:kode", pelangganController.getPelangganByKode);

// CREATE - POST
router.post("/", pelangganController.createPelanggan);

// UPDATE - PATCH
router.patch("/:kode", pelangganController.updatePelanggan);

// DELETE - DELETE
router.delete("/:kode", pelangganController.deletePelanggan);

module.exports = router;