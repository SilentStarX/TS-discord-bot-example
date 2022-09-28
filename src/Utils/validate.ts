// Env Variables Validation Function
export function validateEnv(): boolean {
	if (!process.env.DISCORD_TOKEN) {
		console.log('I expected a value at: process.env.DISCORD_TOKEN');
		return false;
	}
	if (!process.env.DEV_OWNER_ID) {
		console.log('I expected a value at: process.env.DEV_OWNER_ID');
	}
	return true;
}