import { Client, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import { validateEnv } from './Utils/validate';
import { EventList } from './treeDir';

// Main Code
(async () => {
	config();
	// Env Validation
	if (!validateEnv()) return;
	// Client Creation
	const client = new Client({ intents: [ GatewayIntentBits.Guilds ] });
	// Discord Event Handler
	for (const event of EventList) {
		if (event.once) {
			client.once(event.name, (...args) => event.execute(...args));
		}
		else {
			client.on(event.name, (...args) => event.execute(...args));
		}
	}
	// Login
	await client.login(process.env.DISCORD_TOKEN);
})();