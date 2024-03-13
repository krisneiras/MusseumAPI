import request from "supertest";
import app from "../app.js";

const api = request(app);

describe('Testing CRUD sculptures', ()=> {

test('Response body must be an array and then show 200 status', async() => {
    const response = await api.get('/api');
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.status).toBe(200);
});

});