<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/fcg.png';

	let { children } = $props();

	export const ssr = true;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>FCG - CLearn</title>
	<meta name="description" content="FCG Site">

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://mariann-bounden-uneclectically.ngrok-free.dev/">
	<meta property="og:type" content="website">
	<meta property="og:title" content="FCG - CLearn">
	<meta property="og:description" content="CLearn ist eine LernPlattform von FCG. Wir bieten viele Arten zu lernen unteranderem auch kleinere Spiele.">
	<meta property="og:image" content="https://clearn-iota.vercel.app/_app/immutable/assets/fcg.CUGjIfqq.png">

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image">
	<meta property="twitter:domain" content="mariann-bounden-uneclectically.ngrok-free.dev">
	<meta property="twitter:url" content="https://mariann-bounden-uneclectically.ngrok-free.dev/">
	<meta name="twitter:title" content="FCG - CLearn">
	<meta name="twitter:description" content="CLearn ist eine LernPlattform von FCG. Wir bieten viele Arten zu lernen unteranderem auch kleinere Spiele.">
	<meta name="twitter:image" content="https://clearn-iota.vercel.app/_app/immutable/assets/fcg.CUGjIfqq.png">
</svelte:head>

{@render children()}
