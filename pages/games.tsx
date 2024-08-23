import { useEffect, useState } from "react"

interface Game {
	name: string
	playtime: number
	score: number
}

const Games = () => {
	const [data, setData] = useState<Game[]>([])
	const [loading, setLoading] = useState(true)
	const [dsc, setDsc] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("/games.json")
			const json = await res.json()

			// sort by name
			json.sort((a, b) => a.name.localeCompare(b.name))

			setData(json as Game[])
			setLoading(false)
		}

		fetchData()
	}, [])

	if (loading) {
		return <div className="min-h-screen">Loading...</div>
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
				<div>-</div>
			</div>
		</div>
	)
}

export default Games
