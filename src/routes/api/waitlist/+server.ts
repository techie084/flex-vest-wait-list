import { json } from '@sveltejs/kit';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export const POST = async ({ request }) => {
	try {
		const { name, email } = await request.json();

		if (!email || !name) {
			return json({ error: 'Name and Email is required' }, { status: 400 });
		}

		await notion.pages.create({
			parent: {
				database_id: process.env.NOTION_DATABASE_ID
			},
			properties: {
				Name: { title: [{ text: { content: name || 'Anonymous' } }] },
				Email: { email }
			}
		});

		return json({ message: 'Added  to the waitlist' });
	} catch (error) {
		console.error('Notion error', error);
		return json({ error: 'Failed to add to waitlist' }, { status: 500 });
	}
};
