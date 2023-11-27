const index = () => {
	return (
		<article className="bg-clr-gdg-green-100 rounded-md overflow-hidden">
			<div className="grid mdsm:grid-cols-[40%_1fr] gap-x-8">
				<div className="hidden mdsm:block mdsm:w-full mdsm:h-full">
					<img src="./assets/history.png" alt="History picture" className="w-full h-full object-cover object-center"/>
				</div>
				<div className="py-8 px-8 mdsm:pl-0">
					<h5>Info Session</h5>
					<p className="text-body-1 -mt-1 mb-3 text-gray-500">Jun 8, 2023</p>
					<p className="text-body-2">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
						consectetur maxime fugit commodi quisquam voluptates eveniet
						cupiditate tempora non ea ullam a distinctio doloribus consequuntur,
						cum provident sed, cumque nam!
					</p>
				</div>
			</div>
		</article>
	);
};

export default index;
