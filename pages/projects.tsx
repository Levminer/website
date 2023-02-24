import Head from "next/head"
import axios from "axios"
import { useEffect } from "react"
import AppShowcase from "../components/appShowcase"

const Home = () => {
	useEffect(() => {
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

			{/* highlighted desktop projects */}
			<section id="desktop" className="mx-auto flex flex-col flex-wrap bg-gradient-to-r from-blue-800 to-rose-800 pb-32">
				<h3 className="my-24 text-center text-5xl">Desktop projects</h3>

				<AppShowcase img={"authme.jpg"} title={"Authme"} description={"Simple cross platform two-factor authentication app for desktop."} website={"https://authme.levminer.com/"} source={"https://github.com/levminer/authme"} technologies={"Rust, TypeScript"} />
			</section>

			{/* desktop projects */}
			<section id="desktop" className="mx-auto flex flex-col flex-wrap bg-gradient-to-r from-blue-800 to-rose-800 pb-32">
				<div className="flex flex-row flex-wrap gap-3">
					<AppShowcase img={"screentime.jpg"} title={"Screentime"} description={"Track how much time you spend on your computer."} website={"https://github.com/levminer/screentime/releases"} source={"https://github.com/levminer/screentime"} technologies={"Electron, TypeScript"} />

					<AppShowcase img={"https://github.com/Levminer/cores/blob/dev/screenshots/home.png?raw=true"} title={"Cores"} description={"Hardware monitor."} website={"https://cores.levminer.com"} source={"https://github.com/levminer/cores"} technologies={"C#, TypeScript"} />
				</div>
			</section>

			{/* web projects */}
			<section id="web" className="flex flex-col flex-wrap bg-gradient-to-r from-cyan-600 to-emerald-500 pb-32">
				<h3 className="my-24 text-center text-5xl">Web projects</h3>

				<div className="flex flex-row flex-wrap gap-3">
					{/* prettier-ignore*/}
					<AppShowcase 
						img={"ns.jpg"} 
						title={"Netflix Statistics"} 
						description={"View how much time you spent in your life watching Netflix."} 
						website={"https://netflixstatistics.levminer.com"} 
						source={"https://github.com/levminer/netflix-statistics"}
						technologies={"React, TypeScript"}
					/>

					{/* prettier-ignore*/}
					<AppShowcase 
						img={"authmeweb.jpg"} 
						title={"Authme Web"} 
						description={"Web app for Authme the cross-platform two-factor authentication app."} 
						website={"https://web.authme.levminer.com"} 
						source={"https://github.com/levminer/authme-web"}
						technologies={"Vue.js, JavaScript"}
					/>
				</div>
			</section>
		</>
	)
}

export default Home

