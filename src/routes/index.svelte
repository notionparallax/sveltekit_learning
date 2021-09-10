<script context="module">
	export const prerender = true;
</script>

<script>
	import LoremP from '$lib/LoremP.svelte';
	import ChipField from '$lib/ChipField.svelte';

	import {
		MaterialApp,
		Button,
		Chip,
		// Slider,
		Switch,
		Tabs,
		Tab,
		TabContent,
		TextField,
		Textarea,
		Icon
	} from 'svelte-materialify';
	//Icons: get list from https://materialdesignicons.com/
	import { mdiAxe, mdiBathtub, mdiHome, mdiTagPlus } from '@mdi/js';
	let theme = 'light';

	let slider_min = 10;
	let slider_max = 50;
	const values = [false, true];

	const rules = [(v) => v.length <= 20 || 'Max 20 characters'];
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
		<Tabs grow>
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
				<h4>Your name</h4>
				<p>This is how your name will be on your edition, and on the envelope.</p>
				<TextField clearable counter={20} {rules}>My name is:</TextField>

				<h4>Address</h4>
				<p>Where should we send your edition?</p>
				<TextField clearable counter={20} {rules}>Line 1</TextField>
				<TextField clearable counter={20} {rules}>Line 2</TextField>
				<TextField clearable counter={20} {rules}>City</TextField>
				<TextField clearable counter={20} {rules}>State</TextField>
				<TextField clearable counter={20} {rules}>Post code</TextField>
				<TextField clearable counter={20} {rules}>Country</TextField>
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
				<div>
					<p>TODO: bind this to a store, or to the DB or something ¯\_( ͡° ͜ʖ ͡°)_/¯</p>
					<h4>Tags:</h4>
					<ChipField />
					<h4>Search terms:</h4>
					<p>
						TODO: make the js inside the component look for <em>this</em> input, not using
						<code>document</code>
					</p>
					<ChipField />
				</div>
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
