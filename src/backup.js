export function backup(state, filename){
	const a = document.createElement('a')
	a.href = `data:text/plain;charset=utf-8;base64,${window.btoa(JSON.stringify(state, null, 2))}`
	a.download = filename
	a.click()
}

export function restore(state){
	const input = document.createElement('input')
	input.type = 'file'
	input.click()

	let outcome
	input.addEventListener('change', x => {
		const {files} = x.target
		const [file] = files

		const reader = new FileReader
		reader.readAsText(file)

		reader.addEventListener('load', y => {
			outcome = JSON.parse(reader.result)
			state.value = outcome
		})
	})
}