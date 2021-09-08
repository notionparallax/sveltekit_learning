<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter.svelte';

	// import MaterialApp from 'svelte-materialify/src/components/MaterialApp/MaterialApp.svelte';
	// import Button from 'svelte-materialify/src/components/Button/Button.svelte';
	import { MaterialApp, Button, Chip, Slider, Switch } from 'svelte-materialify';

	let theme = 'light';

	let slider_min = 10;
	let slider_max = 50;
	const values = [false, true];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

<section>
	<MaterialApp {theme}>
		<Button>Hello Annisa!</Button>
		<Chip close>design</Chip><Chip close>underpants</Chip><Chip close>UX</Chip>
		<Slider
			value={[slider_min, slider_max]}
			thumb={[true, true]}
			persistentThumb
			min={3}
			max={100}
			step={97}>Article range</Slider
		>
		<Switch bind:checked={values[0]} inset>Inset {values[0]}</Switch>
		<Switch bind:checked={values[1]} inset>Inset {values[1]}</Switch>
	</MaterialApp>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
