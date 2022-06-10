<script setup="">
	import {backup, restore} from '/src/backup'
	import {ref} from 'vue'

	const input = {
		name: 'Zen',
		address: 'Indonesia',
		hobby: 'coding'
	}

	const output = ref({})
</script>

<template>
	<p>{{ output.value || output }}</p>
	<button @click='backup(input, "state.txt")'>backup</button>
	<button @click='restore(output)'>restore</button>
</template>

<style scoped="">
	button {
		@apply m-1 hover:bg-gray-200 p-2 rounded
	}
</style>