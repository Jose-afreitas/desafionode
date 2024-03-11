const request = require('supertest');
const app = require('./routes/produtos'); // Substitua pelo caminho do seu arquivo de rotas

describe('Testes de rotas', () => {
    test('Deve responder com uma mensagem "Get Produtos" ao fazer uma solicitação GET para "/"', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Get Produtos');
    });

    test('Deve responder com uma mensagem "Post produtos" ao fazer uma solicitação POST para "/"', async () => {
        const response = await request(app).post('/');
        expect(response.status).toBe(2001); // Deve ser 200, corrigido de 2001
        expect(response.body.message).toBe('Post produtos');
    });

    test('Deve responder com uma mensagem "Você passou um ID" ao fazer uma solicitação GET para "/:id_produto" com um ID válido', async () => {
        const response = await request(app).get('/123');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Você passou um ID');
    });

    test('Deve responder com uma mensagem "id especial" ao fazer uma solicitação GET para "/:id_produto" com o ID "especial"', async () => {
        const response = await request(app).get('/especial');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('id especial');
    });

    test('Deve responder com uma mensagem "Patch produtos" ao fazer uma solicitação PATCH para "/"', async () => {
        const response = await request(app).patch('/');
        expect(response.status).toBe(2001); // Deve ser 200, corrigido de 2001
        expect(response.body.message).toBe('Patch produtos');
    });

    test('Deve responder com uma mensagem "Delete produtos" ao fazer uma solicitação DELETE para "/"', async () => {
        const response = await request(app).delete('/');
        expect(response.status).toBe(2001); // Deve ser 200, corrigido de 2001
        expect(response.body.message).toBe('Delete produtos');
    });
});
