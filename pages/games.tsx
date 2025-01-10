import Head from "next/head"
import { useEffect, useState } from "react"

interface Game {
	name: string
	playtime: number
	score: number
}

const Games = () => {
	const [data, setData] = useState<Game[]>([])
	const [initialData, setInitialData] = useState<Game[]>([])
	const [loading, setLoading] = useState(true)
	const [dsc, setDsc] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("/games.json")
			const json = await res.json()

			// sort by name
			json.sort((a, b) => a.name.localeCompare(b.name))

			setData(json as Game[])
			setInitialData(json as Game[])
			setLoading(false)

			setTimeout(() => {
				document.getElementById("input")?.focus()
			}, 100)
		}

		fetchData()
	}, [])

	if (loading) {
		return (
			<div className="flex min-h-screen items-center justify-center">
				<svg
					aria-hidden="true"
					className="h-8 w-8 animate-spin fill-white text-gray-200 dark:text-gray-600"
					viewBox="0 0 100 101"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
						fill="currentColor"
					/>
					<path
						d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
						fill="currentFill"
					/>
				</svg>
				<span className="sr-only">Loading...</span>
			</div>
		)
	}

	const getColor = (score: number) => {
		if (score >= 9.5) {
			return "bg-popup-green"
		} else if (score >= 8.0) {
			return "bg-popup-yellow"
		} else {
			return "bg-popup-red"
		}
	}

	const sortScore = () => {
		if (dsc) {
			let sorted = [...data].sort((a, b) => b.score - a.score)
			setData(sorted)
		} else {
			let sorted = [...data].sort((a, b) => a.score - b.score)
			setData(sorted)
		}

		setDsc(!dsc)
	}

	const sortName = () => {
		if (dsc) {
			let sorted = [...data].sort((a, b) => a.name.localeCompare(b.name))
			setData(sorted)
		} else {
			let sorted = [...data].sort((a, b) => b.name.localeCompare(a.name))
			setData(sorted)
		}

		setDsc(!dsc)
	}

	return (
		<div className="min-h-screen bg-[rgb(20,20,20)] py-20">
			<Head>
				<title>Games</title>
			</Head>

			<div className="mx-auto mb-10 flex items-center justify-center">
				<input
					id="input"
					onChange={(e) => {
						if (e.target.value === "") {
							setData(initialData)
						} else {
							let filtered = initialData.filter((game) => {
								return game.name.toLowerCase().includes(e.target.value.toLowerCase())
							})
							setData(filtered)
						}
					}}
					className="rounded-2xl bg-white px-4 py-2 text-2xl text-black focus-visible:outline-none"
					type="text"
				/>
			</div>
			<div className="[&>*:nth-child(odd)]:bg-gray-600 mx-auto flex w-[96%] flex-col items-center justify-center rounded-2xl bg-gray-800 md:w-[60%]">
				<div className="flex w-full flex-row justify-between rounded-t-2xl p-3 text-left">
					<div className="flex flex-row gap-3">
						<button className="font-medium duration-200 ease-in hover:text-gray-300" onClick={sortName}>
							Name
						</button>
						<p>Playtime</p>
					</div>
					<button className="font-medium duration-200 ease-in hover:text-gray-300" onClick={sortScore}>
						Score
					</button>
				</div>
				{data.map((game, index) => (
					<div key={crypto.randomUUID()} className="flex w-full items-center justify-between p-3 text-left">
						<div>
							<h1 className="text-2xl font-bold">{game.name}</h1>
							<h2 className="text-xl text-gray-300">{game.playtime} hours</h2>
						</div>
						<h3 className={`size-10 flex items-center justify-center rounded-full font-bold ${getColor(game.score)} p-3`}>
							{game.score}
						</h3>
					</div>
				))}
				<div className="w-full text-center">-</div>
			</div>
		</div>
	)
}

export default Games
