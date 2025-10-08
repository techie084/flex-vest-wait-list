<script lang="ts">
	import '../app.css';
	import favicon from '/favicon.svg';
	import { Toasts } from 'svoast';

	let { children } = $props();
</script>

<svelte:head>
	<title>Flex Vest Wait List - Join the waitlist</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<main id="app" class="center mx-auto flex flex-col items-center p-4">
	<Toasts position="top-center" />
	{@render children?.()}
</main>
