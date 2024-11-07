const db = require('../config/db.config.js');
const Juego = db.Juego;

// Create a new game entry
exports.create = (req, res) => {
    let juego = {};

    try {
        juego.nombre_juego = req.body.nombre_juego;
        juego.genero = req.body.genero;
        juego.plataforma = req.body.plataforma;
        juego.fecha_lanzamiento = req.body.fecha_lanzamiento;
        juego.precio_alquiler = req.body.precio_alquiler;
        juego.fecha_devolución = req.body.fecha_devolución;
        juego.nombre_Cliente = req.body.nombre_Cliente;
        juego.comentario = req.body.comentario;

        Juego.create(juego).then(result => {    
            res.status(200).json({
                message: "Upload Successfully a Game with id = " + result.id_juego,
                juego: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
};

// Retrieve all games
exports.retrieveAllJuegos = (req, res) => {  // Renamed to match the router
    Juego.findAll()
        .then(juegoInfos => {
            res.status(200).json({
                message: "Get all Games' Infos Successfully!",
                juegos: juegoInfos
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

// Get a game by id
exports.getJuegoById = (req, res) => {  // Renamed to match the router
    let juegoId = req.params.id;
    Juego.findByPk(juegoId)
        .then(juego => {
            res.status(200).json({
                message: "Successfully Get a Game with id = " + juegoId,
                juego: juego
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

// Other controller methods remain unchanged

// Update a game by id
exports.updateById = async (req, res) => {
    try {
        let juegoId = req.params.id;
        let juego = await Juego.findByPk(juegoId);

        if (!juego) {
            res.status(404).json({
                message: "Not Found for updating a game with id = " + juegoId,
                error: "404"
            });
        } else {
            let updatedObject = {
                nombre_juego: req.body.nombre_juego,
                genero: req.body.genero,
                plataforma: req.body.plataforma,
                fecha_lanzamiento: req.body.fecha_lanzamiento,
                precio_alquiler: req.body.precio_alquiler,
                fecha_devolución: req.body.fecha_devolución,
                nombre_Cliente: req.body.nombre_Cliente,
                comentario: req.body.comentario
            };
            let result = await Juego.update(updatedObject, { returning: true, where: { id_juego: juegoId } });

            if (!result) {
                res.status(500).json({
                    message: "Error -> Cannot update a game with id = " + req.params.id,
                    error: "Cannot be updated",
                });
            }

            res.status(200).json({
                message: "Update successfully a Game with id = " + juegoId,
                juego: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> Cannot update a game with id = " + req.params.id,
            error: error.message
        });
    }
};

// Delete a game by id
exports.deleteById = async (req, res) => {
    try {
        let juegoId = req.params.id;
        let juego = await Juego.findByPk(juegoId);

        if (!juego) {
            res.status(404).json({
                message: "Does Not exist a Game with id = " + juegoId,
                error: "404",
            });
        } else {
            await juego.destroy();
            res.status(200).json({
                message: "Delete Successfully a Game with id = " + juegoId,
                juego: juego,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> Cannot delete a game with id = " + req.params.id,
            error: error.message,
        });
    }
};
