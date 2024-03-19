import request from 'supertest';
import app from '../app.js';
import Sculpture from '../models/SculptureModel.js';

const api = request(app);

describe('Testing CRUD sculptures', () => {

    afterAll(async () => {
        // Limpiar la base de datos después de todas las pruebas
        await Sculpture.destroy({ where: { title: 'test' } });
    });

    test('Returned as json', async () => {
        const response = await api.get('/api');
        expect(response.status).toBe(200);
        expect(response.type).toMatch(/json/); // Verificar que la respuesta es JSON
    });

    test('send POST method', async () => {
        const response = await api.post('/api').send({
            image_url: "test",
            title: "test",
            author: "test",
            material: "test",
            year: 1968,
            location: "test"
        });
        expect(response.status).toBe(201); // Verificar que se crea la entidad correctamente
        expect(typeof response.body).toBe('object');
    });

    test('send PUT method', async () => {
        // Crear un recurso previamente para actualizarlo
        const sculpture = await Sculpture.create({
            image_url: "test",
            title: "test",
            author: "test",
            material: "test",
            year: 1968,
            location: "lucero"
        });

        const postId = sculpture.id;
        const response = await api.put(`/api/${postId}`).send({
            image_url: "updated_test",
            title: "updated_test",
            author: "updated_test",
            material: "updated_test",
            year: 2024,
            location: "updated_lucero"
        });
        expect(response.status).toBe(200); // Verificar que se actualiza la entidad correctamente
        expect(typeof response.body).toBe('object');
    });
});