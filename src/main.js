import App from './app.svelte';

/*
window.arweave = Arweave.init({
	host: 'ARWEAVE_HOST',
	port: 443,
	protocol: 'https'
})
*/

const app = new App({
	target: document.body
});

export default app;