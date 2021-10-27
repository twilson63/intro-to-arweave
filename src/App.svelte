<script>
	export let name;
	let data = "";

	const arweave = Arweave.init({
		host: "1984-red-seahorse-2joseq26.ws-us18.gitpod.io",
		port: 443,
		protocol: "https",
	});

	async function createDoc() {
		const jwk = await arweave.wallets.generate();
		//const address = await arweave.wallets.jwkToAddress(key);
		//const balance = await arweave.wallets.getBalance(address);
		const transaction = await arweave.createTransaction(
			{
				data,
			},
			jwk
		);
		await arweave.transactions.sign(transaction, jwk);
		const response = await arweave.transactions.post(transaction);
		console.log(transaction);
		console.log(response.status);
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>
		Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
		how to build Svelte apps.
	</p>
	<input type="text" bind:value={data} />
	<button on:click={createDoc}>Create ArWeave Doc</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
