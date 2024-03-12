const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        message: "Get pedidos"
    })
});

router.post('/', (req, res, next) => {
    res.status(200).send({
        message: 'Post pedidos'
    })
});

router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido

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
        message: "Get ID_Pedido",
        id: id
    })
});

router.patch('/', (req, res, next) => {
    res.status(200).send({
        message: 'Patch pedidos'
    })
});

router.delete('/', (req, res, next) => {
    res.status(200).send({
        message: 'Delete pedidos'
    })
});





module.exports = router;