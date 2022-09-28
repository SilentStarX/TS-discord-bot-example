import { SlashCommandBuilder } from 'discord.js';
import { Base } from '../base';

export interface SlashCommand extends Omit<Base, 'name'> {
	data: SlashCommandBuilder;
}