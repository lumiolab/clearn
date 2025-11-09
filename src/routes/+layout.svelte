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
	<meta property="og:description" content="FCG Site">
	<meta property="og:image" content="">

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image">
	<meta property="twitter:domain" content="mariann-bounden-uneclectically.ngrok-free.dev">
	<meta property="twitter:url" content="https://mariann-bounden-uneclectically.ngrok-free.dev/">
	<meta name="twitter:title" content="FCG - CLearn">
	<meta name="twitter:description" content="FCG Site">
	<meta name="twitter:image" content="">
</svelte:head>

{@render children()}
