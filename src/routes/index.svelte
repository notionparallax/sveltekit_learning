<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter.svelte';

	import {
		MaterialApp,
		Button,
		Chip,
		Slider,
		Switch,
		Tabs,
		Tab,
		Window,
		WindowItem,
		AppBar,
		Icon
	} from 'svelte-materialify';
	//Icons: get list from https://materialdesignicons.com/
	import { mdiAxe, mdiBathtub, mdiHome } from '@mdi/js';
	let theme = 'light';

	let slider_min = 10;
	let slider_max = 50;
	const values = [false, true];
	let windowValue = 0;
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
			step={1}>Article range</Slider
		>
		<Switch bind:checked={values[0]} inset>Inset {values[0]}</Switch>
		<Switch bind:checked={values[1]} inset>Inset {values[1]}</Switch>

		<AppBar>
			<span slot="title"> Title </span>
			<div slot="extension">
				<Tabs class="green-text" bind:windowValue fixedTabs>
					<div slot="tabs">
						<Tab><Icon class="primary-text" path={mdiHome} /><br />Item 1</Tab>
						<Tab><Icon class="primary-text" path={mdiAxe} /><br />Item 2</Tab>
						<Tab><Icon class="primary-text" path={mdiBathtub} /><br />Item 3</Tab>
					</div>
				</Tabs>
			</div>
		</AppBar>

		<Window {windowValue} class="ma-4">
			<WindowItem>
				<h4>Thing 1</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, diam et elementum
					gravida, arcu mi fermentum nibh, vel dapibus ligula orci non est. Morbi commodo sagittis
					finibus. Maecenas in volutpat massa. Nullam vulputate metus velit, quis interdum elit
					imperdiet ut. Suspendisse et sagittis erat, euismod vulputate enim. Etiam feugiat sit amet
					justo vitae commodo.
				</p>
			</WindowItem>
			<WindowItem>
				<h4>Item 2</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, diam et elementum
					gravida, arcu mi fermentum nibh, vel dapibus ligula orci non est. Morbi commodo sagittis
					finibus. Maecenas in volutpat massa. Nullam vulputate metus velit, quis interdum elit
					imperdiet ut. Suspendisse et sagittis erat, euismod vulputate enim. Etiam feugiat sit amet
					justo vitae commodo.
				</p>
			</WindowItem>
			<WindowItem>
				<h4>Item 3</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, diam et elementum
					gravida, arcu mi fermentum nibh, vel dapibus ligula orci non est. Morbi commodo sagittis
					finibus. Maecenas in volutpat massa. Nullam vulputate metus velit, quis interdum elit
					imperdiet ut. Suspendisse et sagittis erat, euismod vulputate enim. Etiam feugiat sit amet
					justo vitae commodo.
				</p>
			</WindowItem>
		</Window>
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
