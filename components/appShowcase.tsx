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
		<div className="small:bg-gray-700 w-full rounded-xl bg-black/70 p-6 font-mono overflow-hidden">
			<div className="mx-auto flex flex-col justify-center pb-6 text-left">
				<h2 className="text-2xl font-bold">{props.title}</h2>
				<h3 className="text-justify text-gray-200">{props.description}</h3>
				<h3 className=" text-gray-50">
					<u>Technologies:</u> {props.technologies}
				</h3>

				<h3>
					<a
						href={props.website}
						className="font-semibold text-blue-500 duration-200 ease-in hover:underline break-words"
						target="_blank"
						rel="noopener noreferrer"
					>
						[Website]({props.website})
					</a>
				</h3>
				<h3>
					<a
						href={props.source}
						className="font-semibold text-blue-500 duration-200 ease-in hover:underline break-words"
						target="_blank"
						rel="noopener noreferrer"
					>
						[Source]({props.source})
					</a>
				</h3>
			</div>

			<div>
				<div className="relative aspect-[1919/1027] w-full">
					<img
						width={1920}
						height={1020}
						className="h-full w-full rounded-xl bg-white object-cover p-1"
						src={props.img}
						alt={props.title}
					/>
				</div>
			</div>
		</div>
	)
}

export default AppShowcase
