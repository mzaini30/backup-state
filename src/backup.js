export function backup(state, filename){
	const a = document.createElement('a')
	a.href = `data:text/plain;charset=utf-8;base64,${window.btoa(JSON.stringify(state, null, 2))}`
	a.download = filename
	a.click()
}

export function restore(){
	return new Promise((resolve, reject) => {
		const input = document.createElement('input')
		input.type = 'file'
		input.click()

		input.addEventListener('change', async x => {
			const {files} = x.target
			const [file] = files

			const reader = new FileReader
			reader.readAsText(file)

			reader.addEventListener('load', y => {
				resolve(JSON.parse(reader.result))
			})
		})
	})
}