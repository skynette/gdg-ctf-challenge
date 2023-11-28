import { PrimaryButton } from "../Button";
import Nav from "./Nav";

const index = () => {
	return (
		<div className="bg-hero w-full h-screen relative flex items-center justify-center">
			<Nav />
			<div className="padding-inline">
				<div className="flex justify-center items-center">
						<div className="max-w-[860px] text-center">
							<h1 className="font-bold mb-8">
								Join the biggest tech community in Benin City
							</h1>
							<p className="text-fs-body-3 mb-12">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
								blanditiis recusandae iure saepe modi aliquam accusantium.
								Ratione excepturi veniam qui! Optio quisquam sint quasi officia
								architecto quidem. Recusandae, quas quasi?
							</p>
              <PrimaryButton text="Join the Community"/>
						</div>
					</div>
			</div>
		</div>
	);
};

export default index;
