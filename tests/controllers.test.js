import request from 'supertest'
import app from '../app'

const api = request(app); // request nos permite hacer solicitudes a la app

describe('Testing controllers', ()=>  {

    test('It should get an object and then show 200 status', async() => {
    const response = await api.get('/api');
    expect(typeof response.body).toBe('object'); //que objeto quiero recibir; modificar
    expect(response.status).toBe(200); 
    });

    test('Should create a sculpture with all fields from the model', async () => {
        const response = await api.post('/api').send({
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Michelangelo%27s_David_-_right_view_2.jpg/270px-Michelangelo%27s_David_-_right_view_2.jpg",
                "title": "Esto es una escultura",
                "author": "Pedro",
                "material": "Piedra",
                "year": 1977,
                "location": "Espana"
        });
        expect(typeof response.body).toBe('object');
        expect(response.status).toBe(201); 
    });


});
