import Head from "next/head"
import axios from "axios"
import { useEffect } from "react"

const Home = () => {
	const authmeDownloads = async () => {
		try {
			await axios.get("https://api.github.com/repos/Levminer/authme/releases").then((res) => {
				try {
					let download_count = 0

					for (let i = 0; i < res.data.length; i++) {
						download_count += res.data[i].assets[0].download_count
						download_count += res.data[i].assets[1].download_count

						try {
							download_count += res.data[i].assets[2].download_count
							download_count += res.data[i].assets[3].download_count
							download_count += res.data[i].assets[4].download_count
							download_count += res.data[i].assets[5].download_count
							download_count += res.data[i].assets[6].download_count
						} catch (error) {}
					}

					document.querySelector("#authmeDownloads").textContent = download_count
				} catch (error) {
					return console.log(error)
				}
			})
		} catch (error) {
			console.warn(`Error: ${error}`)
		}
	}

	const authmeStars = async () => {
		try {
			await axios.get("https://api.github.com/repos/Levminer/authme").then((res) => {
				let star_gazers = res.data.stargazers_count

				document.querySelector("#authmeStars").textContent = star_gazers
			})
		} catch (error) {
			console.warn(`Error: ${error}`)
		}
	}

	useEffect(() => {
		authmeDownloads()
		authmeStars()

		document.querySelector("html").classList.add("scroll-smooth")

		return () => {
			document.querySelector("html").classList.remove("scroll-smooth")
		}
	}, [])

	return (
		<>
			<Head>
				<title>Projects</title>
			</Head>
			{/* hero */}
			<section className="bg">
				<div className="hero container mx-auto -mt-12 flex flex-col items-center justify-center py-72">
					<div className="w-full text-center lg:w-2/3">
						<h1 className="mb-4 text-6xl font-bold ">Projects</h1>
						<h2 className="mb-4 text-4xl">Some of my programming projects</h2>
						<div className="flex items-center justify-center gap-5">
							<a className="buttont" href="#desktop">
								Desktop projects
							</a>

							<a className="buttont" href="#web">
								Web projects
							</a>
						</div>
						<div className="mt-40 flex justify-center">
							<a href="#desktop" className="animate-bounce" aria-label="Go down">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</section>
			{/*  desktop projects */}
			<section id="desktop" className="mx-auto flex flex-col flex-wrap bg-gradient-to-r from-blue-800 to-rose-800 pb-32">
				<h3 className="my-24 text-center text-5xl">Desktop projects</h3>

				{/* <!-- authme card --> */}
				<div className="glass mx-auto mb-12 max-w-sm overflow-hidden rounded-2xl p-6 md:max-w-2xl">
					<div className="rounded-xl bg-white p-2">
						<img loading="lazy" className="rounded" src="authme.jpg" alt="authme" />
					</div>

					<div className="mx-auto flex flex-col justify-center pt-6 text-center">
						<h1 className="text-4xl font-bold ">Authme</h1>
						<h2 className="mt-3 text-center text-2xl text-gray-200">Simple cross platform two-factor authentication app for desktop.</h2>
						<div className="mt-6 flex justify-center gap-3">
							<a className="button" target="_blank" rel="noopener" href="https://authme.levminer.com/">
								Download
							</a>
							<a className="button" target="_blank" rel="noopener" href="https://github.com/levminer/authme">
								Source
							</a>
						</div>
						<div>
							<h3 className="flex flex-row flex-wrap items-center justify-center gap-3 pt-8 text-lg text-gray-50">
								<div className="flex flex-row gap-1">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
									</svg>
									Downloads: <span id="authmeDownloads"></span>
								</div>
								<div className="flex flex-row gap-1">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
									</svg>
									Technologies: Tauri, TypeScript
								</div>
								<div className="flex flex-row gap-1">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									Stars: <span id="authmeStars"></span>
								</div>
							</h3>
						</div>
					</div>
				</div>
			</section>
			{/* more desktop projects */}
			<section id="desktop" className="mx-auto flex flex-col flex-wrap bg-gradient-to-r from-blue-800 to-rose-800 pb-32">
				<div className="flex flex-row flex-wrap gap-3">
					{/* <!-- screentime card --> */}
					<div className="glass mx-auto mb-12 max-w-sm overflow-hidden rounded-2xl p-6 md:max-w-2xl">
						<div className="rounded-xl bg-white p-2">
							<img loading="lazy" className="rounded" src="screentime.jpg" alt="screentime" />
						</div>

						<div className="mx-auto flex flex-col justify-center pt-6 text-center">
							<h1 className="text-4xl font-bold ">Screentime</h1>
							<h2 className="mt-3 text-center text-2xl text-gray-200">Track how much time you spend on your computer.</h2>
							<div className="mt-6 flex justify-center gap-3">
								<a className="button" target="_blank" rel="noopener" href="https://github.com/levminer/screentime/releases">
									Download
								</a>
								<a className="button" target="_blank" rel="noopener" href="https://github.com/levminer/screentime">
									Source
								</a>
							</div>
							<div>
								<h3 className="flex flex-row flex-wrap items-center justify-center gap-3 pt-8 text-lg text-gray-50">
									<div className="flex flex-row gap-1">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
										</svg>
										Technologies: Electron, TypeScript
									</div>
								</h3>
							</div>
						</div>
					</div>

					{/* <!-- authme lite card --> */}
					<div className="glass mx-auto mb-12 max-w-sm overflow-hidden rounded-2xl p-6 md:max-w-2xl">
						<div className="rounded-xl bg-white p-2">
							<img loading="lazy" className="rounded" src="authmelite.jpg" alt="authme lite" />
						</div>

						<div className="mx-auto flex flex-col justify-center pt-6 text-center">
							<h1 className="text-4xl font-bold ">Authme Lite</h1>
							<h2 className="mt-3 text-center text-2xl text-gray-200">A lite and simple two-factor authentication app for desktop.</h2>
							<div className="mt-6 flex justify-center gap-3">
								<a className="button" target="_blank" rel="noopener" href="https://github.com/levminer/authme-lite/releases">
									Download
								</a>
								<a className="button" target="_blank" rel="noopener" href="https://github.com/levminer/authme-lite">
									Source
								</a>
							</div>
							<div>
								<h3 className="flex flex-row flex-wrap items-center justify-center gap-3 pt-8 text-lg text-gray-50">
									<div className="flex flex-row gap-1">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
										</svg>
										Technologies: Tauri, JavaScript
									</div>
								</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- web --> */}
			<section id="web" className="flex flex-col flex-wrap bg-gradient-to-r from-cyan-600 to-emerald-500 pb-32">
				<h3 className="my-24 text-center text-5xl">Web projects</h3>

				<div className="flex flex-row flex-wrap gap-3">
					{/* <!-- netflix statistics --> */}
					<div className="glass mx-auto mb-12 max-w-sm overflow-hidden rounded-2xl p-6 md:max-w-2xl">
						<div className="rounded-xl bg-white p-2">
							<img loading="lazy" className="rounded" src="ns.jpg" alt="authme" />
						</div>

						<div className="mx-auto flex flex-col justify-center pt-6 text-center">
							<h1 className="text-4xl font-bold ">Netflix Statistics</h1>
							<h2 className="mt-3 text-center text-2xl text-gray-200">If you want to know how much time you spent in your life watching Netflix!</h2>
							<div className="mt-6 flex justify-center gap-3">
								<a className="button" target="_blank" rel="noopener" href="https://netflixstatistics.levminer.com/">
									Website
								</a>
								<a className="button" target="_blank" rel="noopener" href="https://github.com/levminer/netflix-statistics">
									Source
								</a>
							</div>
							<div>
								<h3 className="flex flex-row flex-wrap justify-center gap-3 pt-8 text-lg text-gray-50">
									<div className="flex flex-row gap-1">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
										</svg>
										Technologies: React, TypeScript
									</div>
								</h3>
							</div>
						</div>
					</div>
					{/* <!-- authme web --> */}
					<div className="glass mx-auto mb-12 max-w-sm overflow-hidden rounded-2xl p-6 md:max-w-2xl">
						<div className="rounded-xl bg-white p-2">
							<img loading="lazy" className="rounded" src="authmeweb.jpg" alt="authme" />
						</div>

						<div className="mx-auto flex flex-col justify-center pt-6 text-center">
							<h1 className="text-4xl font-bold ">Authme Web</h1>
							<h2 className="mt-3 text-center text-2xl text-gray-200">Web app for Authme the cross-platform two-factor authentication app.</h2>
							<div className="mt-6 flex justify-center gap-3">
								<a className="button" target="_blank" rel="noopener" href="https://web.authme.levminer.com/">
									Website
								</a>
								<a className="button" target="_blank" rel="noopener" href="https://github.com/levminer/authme-web">
									Source
								</a>
							</div>
							<div>
								<h3 className="flex flex-row flex-wrap justify-center gap-3 pt-8 text-lg text-gray-50">
									<div className="flex flex-row gap-1">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
										</svg>
										Technologies: Vue.js, JavaScript
									</div>
								</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Home

