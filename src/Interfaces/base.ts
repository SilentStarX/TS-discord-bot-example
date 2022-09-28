// Base Interface
/**
 * Base Interface for other interfaces.
 */
export interface Base {
	name: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	execute: (...args: any) => Promise<void> | void;
}