import PersonCard from "../PersonCard"

const index = () => {
  return (
		<section className="padding-inline section">
			<h2 className="text-left">GDG Benin Founders</h2>

			<div className="grid-layout">
				<PersonCard />
				<PersonCard />
				<PersonCard />
				<PersonCard />
				<PersonCard />
				<PersonCard />
			</div>
		</section>
	);
}

export default index