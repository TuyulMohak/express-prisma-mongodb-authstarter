import app from '../../../app.js'
import request from 'supertest'
import { describe, expect, test } from 'vitest'

describe('Register', () =>{
	test.concurrent('Succesfull register return 201', async () => {
		const account = {
			email: 'random@xyzs.com',
			password: 'muaramuara'
		}
		const res = await request(app).post('/auth/register').send(account)
		expect(res.status).toBe(201)
		console.log(res.body)
	}, 30000)

	test.concurrent('Email already used return 400', async () => {
		const account = {
			email: 'tuyulmohak0@gmail.com',
			password: 'muaracoder'
		}
		const res = await request(app).post('/auth/register').send(account)
		expect(res.status).toBe(403)
		console.log(res.body)
	}, 30000)

	test.concurrent('Bad Email &/ password Format return 400', async () => {
		const account = {
			email: 'tuyulmohak0@gmailcom',
			password: 'muara'
		}
		const res = await request(app).post('/auth/register').send(account)
		expect(res.status).toBe(400)
		console.log(res.body)
	}, 30000)

})