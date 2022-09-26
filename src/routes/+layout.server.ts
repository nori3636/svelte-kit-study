import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
//export const load: LayoutServerLoad = async ({ request, locals, setHeaders }) => {
export const load: LayoutServerLoad = async ({ locals}) => {
	const  user  = locals.userid;
	//console.log(user);
	return { user: user };
	
};
