export function backup(state, filename){
	let data = JSON.stringify(state, null, 2)
	data = encodeURIComponent(data)
	data = unescape(data)
	data = window.btoa(data)

	const a = document.createElement('a')
	a.href = `data:text/plain;charset=utf-8;base64,${data}`
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
				let data = reader.result
				data = escape(data)
				data = encodeURIComponent(data)
				data = JSON.parse(data)

				resolve(data)
			})
		})
	})
}