import React from "react"

type AppShowcaseProps = {
	img: string
	title: string
	description: string
	website: string
	source: string
	technologies: string
}

const AppShowcase = (props: AppShowcaseProps) => {
	return (
		<div className="glass small:bg-gray-700 mx-auto mb-12 max-w-sm overflow-hidden rounded-2xl p-6 md:max-w-4xl">
			<div className="rounded-xl bg-white p-2">
				<img className="rounded" src={props.img} alt={props.title} />
			</div>

			<div className="mx-auto flex flex-col justify-center pt-6 text-center">
				<h1 className="text-4xl font-bold ">{props.title}</h1>
				<h2 className="mt-3 text-center text-2xl text-gray-200">{props.description}</h2>

				<div className="mt-6 flex justify-center gap-3">
					<a className="button" target="_blank" rel="noopener noreferrer" href={props.website}>
						Website
					</a>
					<a className="button" target="_blank" rel="noopener noreferrer" href={props.source}>
						Source
					</a>
				</div>

				<div>
					<h3 className="flex flex-row flex-wrap justify-center gap-3 pt-8 text-lg text-gray-50">
						<div className="flex flex-row gap-1">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
								<path
									fillRule="evenodd"
									d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
							Technologies: {props.technologies}
						</div>
					</h3>
				</div>
			</div>
		</div>
	)
}

export default AppShowcase
