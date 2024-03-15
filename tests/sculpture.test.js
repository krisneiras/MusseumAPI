import request from "supertest";
import app from "../app.js";

const api = request(app);

describe('Testing CRUD sculptures', ()=> {

test('Response body must be an array and then show 200 status', async() => {
    const response = await api.get('/api');
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.status).toBe(200);
});


test('Should create a sculpture with all fields from the model', async() => {
    const response = await api.post('/api').send({
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/4/4d/El_oso_y_el_madroño_-_02.jpg",
        "title": "test",
        "author": "test",
        "material": "test",
        "year": 1977,
        "location": "test"
    });
    expect(typeof response.body).toBe('object');
    expect(response.status).toBe(201);
    })
});


test('Should update a sculpture with provided data', async () => {
    const sculptureId = 1;
    const updatedSculptureData = {
        "title": "Updated Title",
        "author": "Updated Author",
        "material": "Updated Material",
        "year": 2024,
        "location": "Updated Location"
    };
    const response = await api.put(`/api/${1}`).send(updatedSculptureData);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Escultura actualizada correctamente');
});
