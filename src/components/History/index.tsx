const index = () => {
	return (
		<div>
			<div className="padding-inline grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div className="relative">
					<div className="grid grid-cols-12 grid-rows-6">
						<div className="col-start-1 col-end-8 row-start-1 row-end-5 w-full h-full">
							<img
								src="./assets/history.png"
								alt="History 1"
								className="max-w-full h-full object-cover"
							/>
						</div>
						{/* <div className="absolute top-full -right-1/2 -translate-y-1/2 w-[356px]"> */}
						<div className="col-start-5 col-end-13 row-start-4 row-end-7 w-full h-full">
							<img
								src="./assets/history2.png"
								alt="History 2"
								className="max-w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>

				<div className="pt-20">
					<h2 className="">Brief History of GDG Benin</h2>
					<div className="flex flex-col gap-4">
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Doloribus neque enim quos culpa molestias sunt similique placeat
							molestiae, alias rerum est temporibus maxime velit voluptates
							quidem ab eveniet eligendi mollitia.
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Doloribus neque enim quos culpa molestias sunt similique placeat
							molestiae, alias rerum est temporibus maxime velit voluptates
							quidem ab eveniet eligendi mollitia.
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Doloribus neque enim quos culpa molestias sunt similique placeat
							molestiae, alias rerum est temporibus maxime velit voluptates
							quidem ab eveniet eligendi mollitia.
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Doloribus neque enim quos culpa molestias sunt similique placeat
							molestiae, alias rerum est temporibus maxime velit voluptates
							quidem ab eveniet eligendi mollitia.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
