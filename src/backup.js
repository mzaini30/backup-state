export function backup(state, filename){
	const blob = new Blob([JSON.stringify(state, null, 2)], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob)

	const a = document.createElement('a')
	a.href = url
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
				let data
				data = reader.result
				data = JSON.parse(data)

				resolve(data)
			})
		})
	})
}