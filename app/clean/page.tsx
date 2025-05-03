"use client"

import { useEffect, useState } from "react"

const Clean = () => {
	const [colorIndex, setColorIndex] = useState(0)
	const colors = ["white", "#F00", "#0F0", "#00F", "#808080", "black"]
	const [isFullscreen, setIsFullscreen] = useState(false)

	useEffect(() => {
		document.querySelector<HTMLDivElement>("#container")!.style.backgroundColor = colors[colorIndex]
	}, [colorIndex])

	useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			if (event.code === "Space") {
				setColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
			}
		}

		document.addEventListener("keydown", handleKeyPress)

		return () => {
			document.removeEventListener("keydown", handleKeyPress)
		}
	}, [])

	useEffect(() => {
		const handleFullscreenChange = () => {
			if (document.fullscreenElement) {
				setIsFullscreen(true)
			} else {
				setIsFullscreen(false)
			}
		}

		document.addEventListener("fullscreenchange", handleFullscreenChange)

		return () => {
			document.removeEventListener("fullscreenchange", handleFullscreenChange)
		}
	}, [])

	return (
		<div id="container" className="bg-white h-screen w-screen flex flex-col items-center justify-center">
			{!isFullscreen && (
				<div className="border-2 border-gray-300 rounded-lg p-4 text-black bg-white flex flex-col items-center justify-center">
					<h1 className="text-black font-medium">Press space to change color</h1>
					<h1 className="text-black font-medium">Press esc to exit fullscreen</h1>
					<button
						className="text-black font-medium underline"
						onClick={() => {
							if (document.documentElement.requestFullscreen) {
								document.documentElement.requestFullscreen()
							}
						}}
					>
						Start
					</button>
				</div>
			)}
		</div>
	)
}

export default Clean
