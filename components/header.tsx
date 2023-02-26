import { useRouter } from "next/router"
import Link from "next/link"

const Header = () => {
	const router = useRouter()

	return (
		<>
			<header className="z-50 small:relative small:backdrop-blur-0 small:bg-black sticky top-0 bg-gray-900/70 text-gray-50 backdrop-blur-xl backdrop-saturate-100">
				<div className="container mx-auto flex flex-shrink-0 flex-col flex-wrap items-center p-5 md:flex-row">
					<span className="title-font mb-4 flex items-center font-medium text-white md:mb-0">
						<Link className="flex items-center justify-center gap-3 text-xl font-medium" href="/">
							<img className="h-8 w-8" src="favicon.ico" alt="Favicon" />
							Levminer
						</Link>
					</span>
					<nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
						<Link className={`mr-3 rounded-xl p-1 px-2 text-2xl transition duration-200 ease-in hover:translate-y-0.5 hover:text-gray-300 ${router.pathname == "/" ? "bg-white p-1 text-black hover:bg-gray-300 hover:text-black" : ""}`} href="/">
							Home
						</Link>
						<Link className={`mr-3 rounded-xl p-1 px-2 text-2xl transition duration-200 ease-in hover:translate-y-0.5 hover:text-gray-300 ${router.pathname == "/projects" ? "bg-white p-1 text-black hover:bg-gray-300 hover:text-black" : ""}`} href="/projects">
							Projects
						</Link>
						<Link className={`mr-3 rounded-xl p-1 px-2 text-2xl transition duration-200 ease-in hover:translate-y-0.5 hover:text-gray-300 ${router.pathname == "/blog" ? "bg-white p-1 text-black hover:bg-gray-300 hover:text-black" : ""}`} href="/blog">
							Blog
						</Link>
						<div className="dropdown small:dropdown-end dropdown-hover">
							<p className="mr-3 cursor-default rounded-xl p-1 px-2 text-2xl transition duration-200 ease-in hover:translate-y-0.5 hover:text-gray-300">More</p>

							<ul className="dropdown-content menu w-52 rounded-xl !bg-gray-700 p-2 shadow">
								<li>
									<a className="hover:bg-gray-600" target="_blank" href="https://link.levminer.com/wp" rel="noopener noreferrer">
										Warriors Pack
									</a>
								</li>
								<li>
									<a className="hover:bg-gray-600" target="_blank" href="https://games.levminer.com" rel="noopener noreferrer">
										Games
									</a>
								</li>
							</ul>
						</div>
					</nav>
					<button className="button mt-5 md:mt-0">
						<a target="_blank" rel="noopener noreferrer" href="mailto:contact@levminer.com">
							Contact
						</a>
					</button>
				</div>
			</header>
		</>
	)
}

export default Header
