export default function Slider() {
	return (
		<div className="mx-[calc(50%_-_50vw)] w-screen overflow-hidden my-8 bg-blue-700 rounded-xl" style={{height: '120px'}}>
			<div className="flex animate-marquee whitespace-nowrap h-full gap-10" style={{minWidth: '200%'}}>
				{[1,2,3,4,5,1,2,3,4,5].map((num, idx) => (
					<div key={idx} className="h-full w-48 md:w-64 flex-shrink-0">
						<img
							src={`/images/s${num}.webp`}
							alt={`Showcase ${num}`}
							className="w-full h-full object-cover object-center rounded-none"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
