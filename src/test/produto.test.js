const express = require('express');
const supertest = require('supertest');
const router = require('../routes/produtos'); // Substitua pelo caminho correto do seu arquivo de rotas

const app = express();
app.use(express.json());
app.use(router);

describe('Testes de rotas', () => {
    test('GET / retorna mensagem "Get Produtos"', async () => {
        const response = await supertest(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Get Produtos');
    });

    test('POST / retorna mensagem "Post produtos"', async () => {
        const response = await supertest(app).post('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Post produtos');
    });

    test('GET /:id_produto retorna mensagem "Você passou um ID"', async () => {
        const response = await supertest(app).get('/1'); // Altere o ID conforme necessário
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Você passou um ID');
    });

    test('GET /:id_produto com id especial retorna mensagem "id especial"', async () => {
        const response = await supertest(app).get('/especial');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('id especial');
    });

    test('PATCH / retorna mensagem "Patch produtos"', async () => {
        const response = await supertest(app).patch('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Patch produtos');
    });

    test('DELETE / retorna mensagem "Delete produtos"', async () => {
        const response = await supertest(app).delete('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Delete produtos');
    });
});
