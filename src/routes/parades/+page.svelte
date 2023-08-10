<script>
	import Map from '$lib/Map.svelte';

	const coords = {
		belfast: {
			long: -5.9282857,
			lat: 54.5957081
		}
	};
</script>

<main class="content">
	<article>
		<header>
			<h1>Parades</h1>
			<p>This is where parades are going to end up eventually. There's nothing here quite yet.</p>
		</header>

		<h2>Map</h2>
		<p>
			This is a map of Belfast, there will be parade lines here at some point. First we need to do
			some graph stuff to figure out the routes, which I've not quite got working yet, but it's
			definintely possible.
		</p>

		<p>
			Should just be a matter of building a graph out of the street names, then running a search to
			find the actual path, cutting off excess from the defined streets.
		</p>

		<p>
			Not sure I'm explaining that well, but that's the idea. There's already an API exposed through
			<a href="https://parades.garymoore.ie">parades.garymoore.ie</a>
			that I can use, but more work needed.
		</p>

		<Map coords={coords.belfast} zoom={11} />
	</article>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	article {
		max-width: 50rem;
	}
</style>
