<script context="module">
	export const prerender = true;
</script>

<script>
	import LoremP from '$lib/LoremP.svelte';

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

	let chips = ['work', 'office', 'design', 'le guin'];

	const rules = [(v) => v.length <= 20 || 'Max 20 characters'];

	const removeChip = (e) => {
		const t = e.detail.currentTarget.closest('.s-chip').innerText;
		chips = chips.filter((x) => x !== t);
		console.log(chips);
	};
	const addChip = (e) => {
		const field = document.getElementById('new-tag-field');
		const incoming = field.value;
		if (field.value.replace(',', '') != '') {
			if (e.target.closest('button#add-tag-button') != undefined) {
				// button specific stuff
				chips = [...chips, incoming];
				field.value = '';
			} else {
				// key press specific stuff
				const char = typeof e !== 'undefined' ? e.keyCode : e.which; //I copied this without understanding it
				if ([59, 44, 13, 186, 188].includes(char)) {
					chips = [...chips, incoming.replace(',', '').replace(';', '')];
					field.value = '';
				}
			}
		}
	};
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
					<p>
						TODO: bind this to the variable, or to a store, or to the DB or something ¯\_( ͡° ͜ʖ ͡°)_/¯
					</p>
					<h4>Tags:</h4>
					{#each chips as chipname}
						<Chip close on:close={removeChip}>{chipname}</Chip>
					{/each}<TextField solo placeholder="New tag" on:keyup={addChip} id="new-tag-field">
						<div slot="append-outer">
							<Button on:click={addChip} icon class="pink-text" id="add-tag-button">
								<Icon path={mdiTagPlus} />
							</Button>
						</div>
					</TextField>
					<p>
						Tags are: {#each chips as chipname}{chipname}, {/each}
					</p>
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
