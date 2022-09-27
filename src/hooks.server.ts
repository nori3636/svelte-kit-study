import type { Handle } from '@sveltejs/kit';
import { api } from './routes/todos/api';
import { browser } from '$app/environment';


export const handle: Handle = async ({ event, resolve }) => {
	let userid = event.cookies.get('userid');
	

	if (!userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		userid = crypto.randomUUID();
		event.cookies.set('userid', userid, { path: '/' });
	}

	if (event.url.pathname.startsWith('/about')) {
		console.log("changes")
	  }

	const test = await getUserInformation(userid);
	console.log(test)

	event.locals.userid = userid;
	
	if (browser){
    	sessionStorage.setItem("key", userid);
	}
	console.log(userid)

	return resolve(event);
};
const getUserInformation = async(arg0: string | undefined) => {
	const result = await api('GET', `todos/${arg0}`);
	if(result.status === 200){
		console.log()
		return {
			todos: await result.json()
		};
	}
	return "test"
}

export async function getSession(request: { locals: { user: string; }; } | undefined) {

	if (request?.locals.user) {

		return { user: request.locals.user };

	}

	return {};

}
