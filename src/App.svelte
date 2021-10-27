<script>
	export let name;
	let data = "";
	let jwk = null;
	let results = "";
	let tokens;

	const arweave = Arweave.init({
		host: "1984-rose-pig-yqdxpr5j.ws-us18.gitpod.io",
		port: 443,
		protocol: "https",
	});

	async function generateKey() {
		jwk = await arweave.wallets.generate();
		results = JSON.stringify(jwk);
	}
	async function createDoc() {
		const transaction = await arweave.createTransaction(
			{
				data,
			},
			jwk
		);
		transaction.addTag("Content-Type", "text/html");
		transaction.addTag("App", "demo");
		await arweave.transactions.sign(transaction, jwk);
		const response = await arweave.transactions.post(transaction);
		console.log(transaction);
		console.log(response.status);
		results = "transaction: " + transaction.id;
	}

	async function sendTokens() {
		const transaction = await arweave.createTransaction({
			quantity: arweave.ar.arToWinston(tokens),
			target: "hZOOp4_tS09w0k6fjkQYJxhYwFKm0ly8DPS7w2ZnRsk",
		});
		await arweave.transactions.sign(transaction, jwk);
		const response = await arweave.transactions.post(transaction);
		console.log(response.status);
		results = `transaction id: ${transaction.id}`;
	}
</script>

<main>
	<h1>Ar Weave Demo</h1>
	<button on:click={generateKey}>Generate Key</button>
	<hr />
	<input type="text" bind:value={data} />
	<br />
	<button disabled={!jwk} on:click={createDoc}>Create ArWeave Doc</button>
	<hr />
	<input type="text" placeholder="Tokens..." bind:value={tokens} />
	<button on:click={sendTokens}>Send Tokens</button>

	<div>
		Results
		<hr />
		{results}
	</div>
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
