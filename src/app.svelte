<script>
  import { Route } from 'tinro'
  import Create from './create.svelte'
  import Pins from './pins.svelte'

</script>
<header>
  <nav>
    <a href="/">Home</a>
    <a href="/create">Create Pin</a>
    <a href="/pins">My Pins</a>
    <button>Connect</button>
  </nav>
  <h1>8pin</h1>
  <p>Permanently Drop Pin anywhere in the world forever!</p>
</header>
<Route path="/">
<main>
  <h2>Welcome to 8pin!</h2>
  <p>
    8pin is a simple application that enables you to drop a GPS pin via your web browser and device from
    anywhere in the world for a couple of pennies. The cool thing about this pin, is it will be documented online 
    forever. It can never be deleted or destroyed and your 2 or 3 cents is all that is needed to make that happen.
  </p>
  <p>No need to make your mark in the physical world, you can simply go to 8pin.com and create a pin.</p>
</main>
</Route>
<Route path="/create"><Create /></Route>
<Route path="/pins"><Pins /></Route>