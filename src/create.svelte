<script>
  let location = null;
  let note = "I am here!";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(pos) {
    location = { lat: pos.coords.latitude, lng: pos.coords.longitude };
  }

  function error(err) {
    alert("Could not find your location: " + err.message);
  }
</script>

<main>
  <h2>Create a pin</h2>
  <p>You are at: {JSON.stringify(location)}</p>
  <form>
    <div>
      <label for="name">Name</label>
      <input id="name" type="text" />
      <p>Name of location</p>
    </div>
    <div>
      <label for="note">Leave a Note:</label>
      <textarea id="note" bind:value={note} />
    </div>
    <div>
      <button>Check In</button>
    </div>
  </form>
</main>
