const MarkdownSymbol = ({ symbol, line }) => {
	return (
		<div className="flex gap-10 text-right">
			<span className="w-8 font-bold text-gray-500">{line}</span>
			<span className="font-bold text-gray-400">{symbol}</span>
		</div>
	)
}

export default MarkdownSymbol