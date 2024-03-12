const express = require('express');
const router = require('../routes/pedidos');
const supertest = require('supertest');
const app = express();
app.use(express.json());
app.use(router);

describe('Testes de rotas', () => {
    test('GET / retorna mensagem "Get pedidos"', async () => {
        const response = await supertest(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Get pedidos');
    });

    test('POST / retorna mensagem "Post pedidos"', async () => {
        const response = await supertest(app).post('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Post pedidos');
    });

    test('GET /:id_pedido retorna mensagem "Você passou um ID"', async () => {
        const response = await supertest(app).get('/1'); // Altere o ID conforme necessário
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Você passou um ID');
    });

    test('GET /:id_pedido com id especial retorna mensagem "id especial"', async () => {
        const response = await supertest(app).get('/especial');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('id especial');
    });

    test('PATCH / retorna mensagem "Patch pedidos"', async () => {
        const response = await supertest(app).patch('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Patch pedidos');
    });

    test('DELETE / retorna mensagem "Delete pedidos"', async () => {
        const response = await supertest(app).delete('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Delete pedidos');
    });
});
