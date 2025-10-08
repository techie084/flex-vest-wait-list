import { json } from '@sveltejs/kit';
import { Client } from '@notionhq/client';
import { Resend } from 'resend';
import waitListEmail from '$lib/emails/waitlistEmail.js';

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async ({ request }) => {
	try {
		const { name, email } = await request.json();

		if (!email || !name) {
			return json({ error: 'Name and Email is required' }, { status: 400 });
		}

		await notion.pages.create({
			parent: {
				database_id: process.env.NOTION_DATABASE_ID as string
			},
			properties: {
				Name: { title: [{ text: { content: name || 'Anonymous' } }] },
				Email: { email }
			}
		});

		await resend.emails.send({
			from: 'wsdoommathew08@gmail.com',
			to: email,
			subject: 'Welcome to the Waitlist',
			html: waitListEmail
			// html: `<p>Hey there, ${name}</p>
			//   <p>Thanks for joining the waitlist! We'll let you know when we launch.</p>
			//   <p>- The Team 🚀</p>
			// `
		});

		return json({ message: 'Added  to the waitlist', success: true });
	} catch (error) {
		console.error('Notion error', error);
		return json({ error: 'Failed to add to waitlist' }, { status: 500 });
	}
};


// export async function POST({ request }) {
// 	const formData = await request.formData();

// 	const name = formData.get('name') as string;
// 	const email = formData.get('email') as string;

// 	console.log('Name', name);
// 	console.log('Email', email);

// 	return new Response(
// 		JSON.stringify({ success: true, message: 'Form submitted successfully ' }),
// 		{ headers: { 'Content-Type': 'application/json' } }
// 	);
// }