<script context="module" lang="ts">
	export type Coordinate = {
		long: number;
		lat: number;
	};
</script>

<script lang="ts">
	import mapboxgl from 'mapbox-gl';
	import { onMount } from 'svelte';

	export let coords: Coordinate;
	export let zoom: number = 9;
	export let style: string = '';

	const containerId = `map-${crypto.randomUUID()}`;

	onMount(() => {
    // This looks bad, but you just gotta expose your secrets for client maps
    // access, ya know? This JWT only has read only access. Just don't worry
    // about it, forget you saw this. 🙂
		mapboxgl.accessToken =
			'pk.eyJ1IjoiZ2FyeXBvdGF0b2VzIiwiYSI6ImNsbDVjcWdobzBpN2kzZmxvM3E0eHZ0a2wifQ.t1OHNIxDYMi_hyq-F22kUQ';
		new mapboxgl.Map({
			container: containerId,
			style: 'mapbox://styles/mapbox/streets-v12',
			center: [coords.long, coords.lat],
			zoom
		});
	});
</script>

<div id={containerId} {style} />
