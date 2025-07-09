import Head from "next/head"
import Link from "next/link"

const Home = () => {
	let i = 1

	return (
		<>
			<Head>
				<title>Work</title>
			</Head>

			<div className="relative flex min-h-screen flex-col bg-gradient-to-bl from-[#0f172a] via-[#100d50] to-[#0f172a] py-32 font-mono">
				<div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center space-y-5 px-5">
					<h1 className="text-center">Couple of companies I've worked with. Want to work with me? Send a mail to work@levminer.com</h1>

					<div className="left w-full rounded-xl border-2 border-white p-5">
						<h2 className="text-2xl font-bold">Giftery International Kft.</h2>
						<h3 className="text-justify">
							<u>Stack:</u> Svelte, SvelteKit, TailwindCSS
						</h3>
						<h3 className="text-justify">
							<u>Responsibilities:</u> Helped built a E-commerce website that is present in 10 countries. Used technologies like
							SvelteKit, TailwindCSS and Firebase. Also helped maintain a complex Back-office website.
						</h3>
						<h3 className="text-left">
							<u>Link:</u>{" "}
							<a
								href="https://sparkl.hu/"
								className="font-semibold text-blue-500 duration-200 ease-in hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								[sparkl.hu](https://sparkl.hu/)
							</a>
						</h3>
					</div>

					<div className="left w-full rounded-xl border-2 border-white p-5">
						<h2 className="text-2xl font-bold">Forum App Kft.</h2>
						<h3 className="text-justify">
							<u>Stack:</u> React, React Native, Expo, Next.js, TailwindCSS
						</h3>
						<h3 className="text-justify">
							<u>Responsibilities:</u> Developed a website and mobile app for university students looking for opportunities in Europe.
							Used technologies like React Native, React, TypeScript and TailwindCSS collaborating closely with designers and other
							developers.
						</h3>
						<h3 className="text-left">
							<u>Link:</u>{" "}
							<a
								href="https://forumapp.eu/"
								className="font-semibold text-blue-500 duration-200 ease-in hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								[forumapp.eu](https://forumapp.eu/)
							</a>
						</h3>
					</div>

					<div className="left w-full rounded-xl border-2 border-white p-5">
						<h2 className="text-2xl font-bold">out!</h2>
						<h3 className="text-justify">
							<u>Stack:</u> React Native, Expo, TypeScript
						</h3>
						<h3 className="text-justify">
							<u>Responsibilities:</u> Built a mobile app for Android and iOS. Users who don't use their phone can earn points that they
							can redeem for coupons.
						</h3>
						<h3 className="text-left">
							<u>Link:</u>{" "}
							<a
								href="https://outfocusapp.hu/"
								className="font-semibold text-blue-500 duration-200 ease-in hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								[outfocusapp.hu](https://outfocusapp.hu/)
							</a>
						</h3>
					</div>

					<div className="left w-full rounded-xl border-2 border-white p-5">
						<h2 className="text-2xl font-bold">kvikk</h2>
						<h3 className="text-justify">
							<u>Stack:</u> React, TypeScript
						</h3>
						<h3 className="text-justify">
							<u>Responsibilities:</u> Built a map widget that can be embedded into websites. It allows users to find the nearest pick
							up point for major delivery services in Hungary.
						</h3>
						<h3 className="text-left">
							<u>Link:</u>{" "}
							<a
								href="https://outfocusapp.hu/"
								className="font-semibold text-blue-500 duration-200 ease-in hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								[kivkk.hu](https://kivkk.hu/)
							</a>
						</h3>
					</div>

					<div className="left w-full rounded-xl border-2 border-white p-5">
						<h2 className="text-2xl font-bold">Kaslik Alapítvány</h2>
						<h3 className="text-justify">
							<u>Stack:</u> HTML, TypeScript
						</h3>
						<h3 className="text-justify">
							<u>Responsibilities:</u> Designed and developed the foundation's website in collaboration with a team of developers, and I
							am responsible for its ongoing maintenance and updates.
						</h3>
						<h3 className="text-left">
							<u>Link:</u>{" "}
							<a
								href="https://kaslikalapitvany.hu/"
								className="font-semibold text-blue-500 duration-200 ease-in hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								[kaslikalapitvany.hu](https://kaslikalapitvany.hu/)
							</a>
						</h3>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
