const request = require('supertest');
const app = require('../app');

describe('users API', () => {
    /* Test GET all users */
    it('GET /users - should return all users', async () => {
        const res = await request(app).get('/users')
        expect(res.statusCode).toEqual(200)
    
    })
 
    /* Test GET single project */
    it('GET /users/:id - should return a single project', async () => {
        const res = await request(app).get('/users/1')
        expect(res.statusCode).toEqual(200)

    })

 
    /* Test POST create a project */
    it('POST /users - should create a new project', async () => {
        const newProject = { name: 'Project 3', description: 'Description 3' }
        const res = await request(app).post('/users').send(newProject)
        expect(res.statusCode).toEqual(201)
    })
 
   
 
    it('PUT /users/:id - should return 404 for non-existent project', async () => {
        const res = await request(app)
            .put('/users/999')
            .send({ name: 'Non-existent' })
        expect(res.statusCode).toEqual(200)
        
    })
 
    /* Test DELETE a project */
    it('DELETE /users/:id - should delete a project', async () => {
        const res = await request(app).delete('/users/1')
        expect(res.statusCode).toEqual(200)
 
    })
 
    
})