import PersonCard from "../PersonCard";

const index = () => {
	return (
		<div>
			<section className="padding-inline section">
				<h2 className="text-left">GDG Benin Team</h2>
				<h4 className="text-left">Current Members</h4>

				<div className="grid-layout">
					<PersonCard />
					<PersonCard />
					<PersonCard />
					<PersonCard />
					<PersonCard />
					<PersonCard />
				</div>
			</section>
			<div className="padding-inline section">
				<h4 className="text-lef">Past Members</h4>

				<div className="grid-layout">
					<PersonCard />
					<PersonCard />
					<PersonCard />
					<PersonCard />
					<PersonCard />
					<PersonCard />
				</div>
			</div>
		</div>
	);
};

export default index;
