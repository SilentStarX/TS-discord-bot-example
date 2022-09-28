import { Client, Events } from 'discord.js';
import { Event } from '../Interfaces/Events/eventInterface';

export const readyEvent: Event = {
	name: Events.ClientReady,
	once: true,
	async execute(client: Client) {
		console.log(`Hello World!  -  (${ client.user?.tag })`);
	},
};