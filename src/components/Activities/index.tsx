import ActivityCard from "../ActivityCard";

const index = () => {
  return (
		<section className="padding-inline section">
			<h2 className="text-left">GDG Benin Activities</h2>

			<div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-10 mt-12">
				<ActivityCard />
				<ActivityCard />
				<ActivityCard />
				<ActivityCard />
				<ActivityCard />
				<ActivityCard />
				<ActivityCard />
				<ActivityCard />
			</div>
		</section>
	);
}

export default index