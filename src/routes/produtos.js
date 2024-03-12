const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        message: "Get Produtos"
    })
});

router.post('/', (req, res, next) => {
    res.status(200).send({
        message: 'Post produtos'
    })
});

router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if (id === 'especial') {
        res.status(200).send({
            message: 'id especial'
        })
    } else {
        res.status(200).send({
            message: "Você passou um ID"
        })
    }
    res.status(200).send({
        message: "Get ID_Produto",
        id: id
    })
});

router.patch('/', (req, res, next) => {
    res.status(200).send({
        message: 'Patch produtos'
    })
});


router.delete('/', (req, res, next) => {
    res.status(200).send({
        message: 'Delete produtos'
    })
});





module.exports = router;