import type { IUser } from './user';

export type IRecipe = {
	title: string;
	creator: IUser;
	description?: string;
	steps: {
		name: string;
		description: string;
	}[];
	requirements: {
		name: string;
		amount: string;
		unit: string;
	}[];
	thumbnail?: string;
	_id: string;
	date_posted: Date;
};
