import request from 'supertest'
import { server, app } from '../app'
import connection_db from '../database/connection_db';
import SculptureModel from '../models/SculptureModel';

const api = request(app); // request nos permite hacer solicitudes a la app

describe('Testing CRUD sculptures', ()=>  {

/*     beforeAll( async () => {
        await connection_db.sync();
    });
 */
    afterAll(async () =>{
        await SculptureModel.destroy({where: {title:'hola'}});
        await connection_db.close();
        server.close();
    });
    

    test('Response body must be an array and then show 200 status', async() => {
    const response = await api.get('/api');
    expect(Array.isArray(response.body)).toBe(true); //que objeto quiero recibir; modificar
    expect(response.status).toBe(200); 
    });

    test('Post response should be an object and return status 201', async () => {
        const response = await api.post('/api').send({
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Michelangelo%27s_David_-_right_view_2.jpg/270px-Michelangelo%27s_David_-_right_view_2.jpg",
                "title": "hola",
                "author": "test",
                "material": "test",
                "year": 1977,
                "location": "test"
        });
        expect(typeof response.body).toBe('object');
        expect(response.status).toBe(201); 
    });

    test('Put request should update a sculpture value and return OK', async () => {

        const id  = 42;

        const response = await api.put(`/api/${id}`).send({
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Michelangelo%27s_David_-_right_view_2.jpg/270px-Michelangelo%27s_David_-_right_view_2.jpg",
            "title": "test",
            "author": "Carlos",
            "material": "test",
            "year": 1977,
            "location": "test"
        });
        expect(response.status).toBe(200);
    });

});
