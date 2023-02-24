import { useRouter } from "next/router"
import Link from "next/link"

const Header = () => {
	const router = useRouter()

	return (
		<>
			<header className="small:static small:backdrop-blur-0 small:bg-black sticky top-0 z-50 bg-gray-900/70 text-gray-50 backdrop-blur-xl backdrop-saturate-100">
				<div className="container mx-auto flex flex-shrink-0 flex-col flex-wrap items-center p-5 md:flex-row">
					<span className="title-font mb-4 flex items-center font-medium text-white md:mb-0">
						<span>
							<Link className="text-xl" href="/">
								Levminer
							</Link>
						</span>
					</span>
					<nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
						<Link className="mr-5 text-2xl duration-200 ease-in hover:text-gray-300" id={router.pathname == "/" ? "activeLink" : ""} href="/">
							Home
						</Link>
						<Link className="mr-5 text-2xl duration-200 ease-in hover:text-gray-300" id={router.pathname == "/projects" ? "activeLink" : ""} href="/projects">
							Projects
						</Link>
						<Link className="mr-5 text-2xl duration-200 ease-in hover:text-gray-300" id={router.pathname == "/blog" ? "activeLink" : ""} href="/blog">
							Blog
						</Link>
						<div className="dropdown relative">
							<button className="mr-5 text-2xl">
								<h1 className="mr-1 duration-200 ease-in hover:text-gray-300">More</h1>
							</button>
							<ul className="dropdown-menu animation absolute z-50 hidden rounded-lg bg-gray-700 text-white">
								<li>
									<a className="block whitespace-nowrap rounded-t-lg py-2 px-8 duration-200 ease-in hover:bg-gray-600" target="_blank" href="https://link.levminer.com/wp" rel="noopener noreferrer">
										Warriors Pack
									</a>
								</li>
								<li>
									<a className="block whitespace-nowrap rounded-b-lg py-2 px-8 duration-200 ease-in hover:bg-gray-600" target="_blank" href="https://games.levminer.com" rel="noopener noreferrer">
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
