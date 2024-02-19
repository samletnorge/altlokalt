// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: any;
			user?: any;
			state?: string;
			verifier?: string;
			siteName?: string;
			isSmallDevice?: boolean;
		}
		// interface Platform {}
		interface PageData {
			flash?: {
				type: 'success' | 'error';
				message: string;
			};
		}
	}
}

export {};
