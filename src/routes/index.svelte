<script context="module">
	export const prerender = true;
</script>

<script>
	import LoremP from '$lib/LoremP.svelte';

	import {
		MaterialApp,
		Button,
		Chip,
		Slider,
		Switch,
		Tabs,
		Tab,
		TabContent,
		Icon
	} from 'svelte-materialify';
	//Icons: get list from https://materialdesignicons.com/
	import { mdiAxe, mdiBathtub, mdiHome } from '@mdi/js';
	let theme = 'light';

	let slider_min = 10;
	let slider_max = 50;
	const values = [false, true];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h2>Debug</h2>
	<dl>
		<dt />
		<dd />
	</dl>
</section>

<section>
	<MaterialApp {theme}>
		<Tabs centerActive>
			<div slot="tabs">
				<Tab>Home<Icon path={mdiHome} /></Tab>
				<Tab>Address<Icon path={mdiAxe} /></Tab>
				<Tab>Settings<Icon path={mdiBathtub} /></Tab>
			</div>

			<TabContent>
				<h4>Home</h4>
				<Button
					on:click={() => {
						alert("I knew you'd click this!");
					}}>Hello Annisa!</Button
				>
				<LoremP />
			</TabContent>
			<TabContent>
				<h4>Address</h4>
				<LoremP />
			</TabContent>
			<TabContent>
				<h4>Settings</h4>
				<!-- <Slider
					value={[slider_min, slider_max]}
					thumb={[true, true]}
					persistentThumb
					min={3}
					max={100}
					step={1}>Article range</Slider
				> -->
				<Slider value={[10, 20]} thumb={[false, true]} persistentThumb>Range</Slider>
				<Chip close>design</Chip><Chip close>underpants</Chip><Chip close>UX</Chip>
				<LoremP />
				<Switch bind:checked={values[0]} inset>Inset {values[0]}</Switch>
				<Switch bind:checked={values[1]} inset>Inset {values[1]}</Switch>
				<LoremP />
			</TabContent>
		</Tabs>
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
</style>
