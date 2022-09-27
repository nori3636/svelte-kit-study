import type { LayoutServerLoad } from './$types';
//export const load: LayoutServerLoad = async ({ request, locals, setHeaders }) => {
export const load: LayoutServerLoad = async ({ locals, request}) => {
	const user = await db.getUser(request.headers.get('cookie'))
	// const  user  = locals.userid;
	//console.log(user);
	return { user: user };
	
};
