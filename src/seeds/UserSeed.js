import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { verifiedUserData, unverifiedUserData, successVerifyTestUser, failVerifyTestUser, forgotPasswordTestUser } from './accounts.js'

async function main () {
	try {
		const newUser = await prisma.user.createMany({
			data:[ verifiedUserData, unverifiedUserData, successVerifyTestUser, failVerifyTestUser, forgotPasswordTestUser ]
		})
		console.log('created two account: verified and unverified')
	} catch (err) {
		console.log('seeding failed: ', err)
	}
}

await main()