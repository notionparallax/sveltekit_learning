<script>
	import { Button, Chip, TextField, Icon } from 'svelte-materialify';
	//Icons: get list from https://materialdesignicons.com/
	import { mdiTagPlus } from '@mdi/js';

	let chips = ['work', 'office', 'design', 'le guin'];

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
	<small
		>Debugging tags are: {#each chips as chipname}{chipname}, {/each}</small
	>
</p>

<style></style>
