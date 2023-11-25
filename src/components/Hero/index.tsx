import Nav from "./Nav";

const index = () => {
	return (
		<div className="bg-hero w-full h-screen relative">
			<Nav />
			<div className="padding-inline">
				<div className="pt-[200px] flex justify-between items-end">
					<div className="flex flex-col gap-y-12">
						<div>
							<h1 className="text-heading2/main font-bold max-w-[860px] text-primary-white mb-4">
								Join the biggest tech community in Benin City, Nigeria
							</h1>
							<p className="text-primary-white text-xl/main">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
								blanditiis recusandae iure saepe modi aliquam accusantium.
								Ratione excepturi veniam qui! Optio quisquam sint quasi officia
								architecto quidem. Recusandae, quas quasi?
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
