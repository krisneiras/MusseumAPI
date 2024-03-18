import request from 'supertest';
import app from '../app.js';
import Sculpture from '../models/SculptureModel.js';

const api = request(app);

describe('Testing CRUD sculptures', () => {


    afterAll(async () => {
        await Sculpture.destroy({ where: { title: 'test' } });
    });

    test('Returned as json', async () => {
        const response = await api.get('/api');
        expect(response.status).toBe(200);
        //expect(response.type).toMatch(/json/); // Verificar que la respuesta es JSON
    });

    test('send POST method', async () => {
        const response = await api.post('/api').send({
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Michelangelo%27s_Pieta_5450_cropncleaned.jpg/600px-Michelangelo%27s_Pieta_5450_cropncleaned.jpg",
            title: "test",
            author: "test",
            material: "test",
            year: 1968,
            location: "test"
        });
        expect(typeof response.body).toBe('object');
        expect(response.status).toBe(201);
    });

    test('send PUT method', async () => {
        const postId = 15;
        const response = await api.put(`/api/${postId}`).send({
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Michelangelo%27s_Pieta_5450_cropncleaned.jpg/600px-Michelangelo%27s_Pieta_5450_cropncleaned.jpg",
            "title": "noguera",
            "author": "test",
            "material": "test",
            "year": 1968,
            "location": "jessica"
        });
        expect(typeof response.body).toBe('object');
    });
});