<script>
  import { router } from "tinro";

  let location = { lat: "", lng: "" };
  let note = "I am here!";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(pos) {
    location = { lat: pos.coords.latitude, lng: pos.coords.longitude };
  }

  function error(err) {
    alert("Could not find your location: " + err.message);
  }

  async function submit(e) {
    const name = e.target.elements.name.value;
    const note = e.target.elements.note.value;

    if (!Arweave) {
      alert("ERROR: Arweave not loaded!");
    }

    const arweave = Arweave.init({
      host: "1984-silver-silkworm-odm72ped.ws-us18.gitpod.io",
      port: 443,
      protocol: "https",
    });

    const transaction = await arweave.createTransaction({
      data: JSON.stringify({
        name,
        note,
        lat: location.lat,
        lng: location.lng,
      }),
    });

    transaction.addTag("Content-Type", "application/json");
    transaction.addTag("App", "8pin");
    transaction.addTag("Type", "pin");

    await arweave.transactions.sign(transaction);
    const response = await arweave.transactions.post(transaction);

    if (response.status === 200) {
      e.target.reset();
      router.goto("/");
    }
  }
</script>

<main>
  <h2>Create a pin</h2>
  <p>You are at: {JSON.stringify(location)}</p>
  <form on:submit|preventDefault={submit}>
    <div>
      <label for="name">Name</label>
      <input id="name" name="name" type="text" />
      <p>Name of location</p>
    </div>
    <div>
      <label for="note">Leave a Note:</label>
      <textarea id="note" name="note" />
    </div>
    <div>
      <button>Check In</button>
    </div>
  </form>
</main>
