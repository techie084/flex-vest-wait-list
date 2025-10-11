import { json } from '@sveltejs/kit';
import { Client } from '@notionhq/client';
import type { RequestHandler } from '@sveltejs/kit';
import { Resend } from 'resend';
import waitListEmail from '$lib/emails/waitlistEmail.js';

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const resend = new Resend(process.env.RESEND_API_KEY);

export const POST: RequestHandler = async ({ request }) => {
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
			from: 'wisdommatthew08@gmail.com',
			to: email,
			subject: 'Welcome to the Waitlist 🥳',
			html: waitListEmail
		});

		return json({ message: 'Added  to the waitlist', success: true });
	} catch (error) {
		console.error('Notion error', error);
		return json({ error: 'Failed to add to waitlist' }, { status: 500 });
	}
};

// html: `<p>Hey there, ${name}</p>
//   <p>Thanks for joining the waitlist! We'll let you know when we launch.</p>
//   <p>- The Team 🚀</p>
// `
