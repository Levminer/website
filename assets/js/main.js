const download = async () => {
	try {
		await fetch("https://api.github.com/repos/Levminer/authme/releases")
			.then((res) => res.json())
			.then((data) => {
				try {
					let download_count = 0

					for (let i = 0; i < data.length; i++) {
						download_count += data[i].assets[0].download_count
						download_count += data[i].assets[1].download_count
						try {
							download_count += data[i].assets[2].download_count
							download_count += data[i].assets[3].download_count
						} catch (error) {}
					}

					document.querySelector("#dc").textContent = download_count
				} catch (error) {
					return console.log(error)
				}
			})
	} catch (error) {
		console.warn(`Error: ${error}`)
	}
}

const start = async () => {
	try {
		await fetch("https://api.github.com/repos/Levminer/authme")
			.then((res) => res.json())
			.then((data) => {
				try {
					let star_gazers = data.stargazers_count

					document.querySelector("#sg").textContent = star_gazers
				} catch (error) {
					return console.log(error)
				}
			})
	} catch (error) {
		console.warn(`Error: ${error}`)
	}
}

download()
start()
