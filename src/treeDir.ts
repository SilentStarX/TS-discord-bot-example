import { readyEvent } from './Events/readyEvent';
import { SlashCommand } from './Interfaces/Commands/slashCommandInterface';
import { Event } from './Interfaces/Events/eventInterface';

export const EventList: Event[] = [ readyEvent ];
export const CommandList: SlashCommand[] = [];