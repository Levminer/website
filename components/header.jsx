import { useRouter } from "next/router"
import Link from "next/link"

const Header = () => {
	const router = useRouter()

	return (
		<>
			<header className="sticky top-0 z-50 bg-gray-900 text-gray-50">
				<div className="lex-shrink-0 container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
					<span className="title-font mb-4 flex items-center font-medium text-white md:mb-0">
						<span>
							<Link href="/">
								<a className="text-xl">Levminer</a>
							</Link>
						</span>
					</span>
					<nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
						<Link href="/">
							<a className="mr-5 text-2xl duration-200 ease-in hover:text-gray-300" id={router.pathname == "/" ? "activeLink" : ""}>
								Home
							</a>
						</Link>
						<Link href="/projects">
							<a className="mr-5 text-2xl duration-200 ease-in hover:text-gray-300" id={router.pathname == "/projects" ? "activeLink" : ""}>
								Projects
							</a>
						</Link>
						<div className="dropdown relative">
							<button className="mr-5 text-2xl">
								<h1 className="mr-1 duration-200 ease-in hover:text-gray-300">More</h1>
							</button>
							<ul className="dropdown-menu animation absolute z-50 hidden rounded-lg bg-gray-700 text-white">
								<li>
									<a className="block whitespace-nowrap rounded-t-lg py-2 px-8 duration-200 ease-in hover:bg-gray-600" target="_blank" href="https://link.levminer.com/wp" rel="noopener">
										Warriors Pack
									</a>
								</li>
								<li>
									<a className="block whitespace-nowrap py-2 px-8 duration-200 ease-in hover:bg-gray-600" target="_blank" href="https://developer.levminer.com" rel="noopener">
										Developer
									</a>
								</li>
								<li>
									<a className="block whitespace-nowrap rounded-b-lg py-2 px-8 duration-200 ease-in hover:bg-gray-600" target="_blank" href="https://games.levminer.com" rel="noopener">
										Games
									</a>
								</li>
							</ul>
						</div>
						<Link href="/about">
							<a className="mr-5 text-2xl duration-200 ease-in hover:text-gray-300" id={router.pathname == "/about" ? "activeLink" : ""}>
								About
							</a>
						</Link>
					</nav>
					<button className="button mt-5 md:mt-0">
						<a target="_blank" rel="noopener" href="mailto:contact@levminer.com">
							Contact
						</a>
					</button>
				</div>
			</header>
		</>
	)
}

export default Header
