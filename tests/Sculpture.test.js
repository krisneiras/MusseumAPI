import request from 'supertest'
import { server, app } from '../app'
import connection_db from '../database/connection_db';
import SculptureModel from '../models/SculptureModel';

const api = request(app); // request nos permite hacer solicitudes a la app

describe('Testing CRUD in sculptures API', ()=>{

    describe('Get request from sculptures api', ()=>{
        let response;
        beforeEach( async() =>{
            response = await api.get('/api');
        });
    
        test('Response body must be an array', async() => {
            expect(Array.isArray(response.body)).toBe(true);
        });
    
        test('Respons status should be 200', () => {
            expect(response.status).toBe(200);
        })
    })
    
    describe('Put request on sculptures api', ()=>{
        let newSculpture = {}
        let response;
    
        beforeEach( async() =>{
            newSculpture = await SculptureModel.create({
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Michelangelo%27s_David_-_right_view_2.jpg/270px-Michelangelo%27s_David_-_right_view_2.jpg",
                "title": "test",
                "author": "test",
                "material": "test",
                "year": 1977,
                "location": "test"
        });
    
    });
    
        test('Put request should update a sculpture value and return OK', async () => {
            const response = await api.put(`/api/${newSculpture.id}`).send({
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Michelangelo%27s_David_-_right_view_2.jpg/270px-Michelangelo%27s_David_-_right_view_2.jpg",
                "title": "test",
                "author": "test",
                "material": "test",
                "year": 1977,
                "location": "test"
            });
            expect(response.status).toBe(200);
        });
    
        afterAll(async () =>{
            await SculptureModel.destroy({where: {title:'test'}});
        });
    })
    
    describe('POST in sculptures api', ()=>{
    
    
       test('Response should return status 201 and type object', async()=>{ 
        
        const response = await api.post('/api').send({
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Michelangelo%27s_David_-_right_view_2.jpg/270px-Michelangelo%27s_David_-_right_view_2.jpg",
            "title": "test",
            "author": "test",
            "material": "test",
            "year": 1977,
            "location": "test"
        });
        
        expect(typeof response.body).toBe('object');
        expect(response.status).toBe(201); 
        
    })
    afterAll(async () =>{
        await SculptureModel.destroy({where: {title:'test'}});
    });
    })
    
    describe('DELETE request sculptures api', ()=>  {
        let newSculpture = {}
        let response;
        beforeEach( async() =>{
            newSculpture = await SculptureModel.create({
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Michelangelo%27s_David_-_right_view_2.jpg/270px-Michelangelo%27s_David_-_right_view_2.jpg",
                "title": "test",
                "author": "test",
                "material": "test",
                "year": 1977,
                "location": "test"
        });
    
        response = await api.delete(`/api/${newSculpture.id}`);
        });
    
        test('Should return status 201', () => {
            expect(response.status).toBe(201);
        });
    
    });
    
    afterAll( () =>{
        connection_db.close();
        server.close();
    });
    
    })