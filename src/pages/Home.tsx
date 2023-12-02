// import { Link } from "react-router-dom";
import PersonCard from "../components/PersonCard/index";
import { PrimaryButton } from "../components/Button";
import { EVENTS_PICTURES, codersData, flags } from "../components/constants";
import { ModalText } from "../components/Modal";
import toast from "react-hot-toast";

const GDG_TEAM = [
	{
		name: "Joseph Origho",
		role: "Team Lead",
	},
	{
		name: "Joy Origho",
		role: "Co Organizier",
	},
	{
		name: "Adedotun Adedigba",
		role: "Co Organizier",
	},
	{
		name: "Ugochukwu Nnachor",
		role: "Co Organizer",
		flag: flags.a_very_easy_fl4g,
	},
	{
		name: "Ojeawere Joseph",
		role: "Co Organizer",
	},
	{
		name: "Okaome Elizabeth C",
		role: "Co Organizer",
	},
	{
		name: "Eseoghena Braimah",
		role: "Co Organizer",
		flag: flags.medium_fl4g,
	},
	{
		name: "Osamwonyi Tessy",
		role: "Co Organizer",
	},
	{
		name: "Omonbude Emmanuel",
		role: "Co Organizer",
	},
	{
		name: "Godschoice Ononyiwita",
		role: "Co Organizer",
		flag: flags.medium_hard_fl4g,
	},
];

const Home = () => {
	return (
		<div className="bg-clr-gdg-green-100/10">
			{/* hero section */}
			<div className="bg-hero w-full h-screen relative flex items-center justify-center">
				<div className="padding-inline">
					<div className="flex justify-center items-center">
						<div className="max-w-[760px] text-center">
							<h1 className="font-bold mb-8">
								Join the biggest tech{" "}
								<ModalText
									className="text-fs-h1 text-clr-gdg-green-700"
									qrCodeSVG={<img src="./flagQrCode.svg" alt="" />}>
									community
								</ModalText>{" "}
								in Benin City
							</h1>
							<p className="text-fs-body-3 mb-12">
								Ignite your passion for technology, stay ahead in the
								ever-evolving digital landscape, and connect with like-minded
								individuals who are shaping the future.
							</p>
							<PrimaryButton text="Join the Community" />
						</div>
					</div>
				</div>
			</div>

			{/* history section */}
			<div>
				<div className="padding-inline grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div className="grid grid-cols-12 grid-rows-6 max-w-md mx-auto">
						<div className="col-start-1 col-end-8 row-start-1 row-end-5 w-full h-full">
							<img
								src="https://res.cloudinary.com/skycoder/image/upload/v1701517976/dev%20fes/12_tx54jv.jpg"
								alt="History 1"
								className="max-w-full h-full object-cover"
							/>
						</div>
						{/* <div className="absolute top-full -right-1/2 -translate-y-1/2 w-[356px]"> */}
						<div className="col-start-5 col-end-13 row-start-4 row-end-7 w-full h-full">
							<img
								src="https://res.cloudinary.com/skycoder/image/upload/v1701517017/dev%20fes/2_kybwwq.jpg"
								alt="History 2"
								className="max-w-full h-full object-cover"
							/>
						</div>
					</div>

					<div className="md:pt-20">
						<h2 className="mb-6 font-semibold">Brief History of GDG Benin</h2>
						<div className="flex flex-col gap-4">
							<p>
								GDG Benin started in 2011. It was founded by Charles Odilli
								Opute who handed over in 2014 to Samuel Ukhueleigbe and Joseph
								Origho. Joseph Origho took over after Samuel relocated to Lagos
								in 2018.
								<span className="hidden md:flex">{flags.avalanche_fl4g}</span>
							</p>
							<p>
								The {""}
								<ModalText
									className="text-clr-gdg-green-700"
									qrCodeSVG={<img src="./complex.svg" alt="" />}>
									GDG Benin
								</ModalText>{" "}
								membership has grown from 15members in 2011 to over 1000 in
								2023, and has hosted over 50 conferences, bootcamps, and code
								labs.
								<span className="hidden lg:flex">{flags.encrypted_fl4g}</span>
							</p>
							<p>
								Major programs for GDG Benin are: The Women Techmakers (WTM)
								Program, Google IO Extended, DevFest Benin. We also organize
								other trainings on Google and non-google {flags.cipher_fl4g}{" "}
								technologies, Job opportunities, Incubation for startups,
								mentorship for beginners, and act as an umbrella for all tech
								communities in Edo state for the effective growth of the Edo
								Tech Ecosystem.
							</p>
							<p className="text-[10px] text-gray-400 md:hidden">
								tip: you can find something interesting on desktop mode
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* team */}
			<div>
				<section className="padding-inline section">
					<h2 className="font-semibold">GDG Benin Team</h2>

					<div className="grid-layout">
						{GDG_TEAM.map(({ name, role, flag }, i) => (
							<PersonCard key={i} name={name} role={role} flag={flag} />
						))}
					</div>
				</section>
			</div>
			{/* activities */}
			{/* <section className="padding-inline section">
                <h2 className="text-left">GDG Benin Activities</h2>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-10 mt-12">
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                </div>
            </section> */}
{/* coders section */}
<section className="padding-inline section pb-12">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-4xl font-semibold mb-6 text-center ">
						Meet the Developers
					</h2>

					<div className="grid grid-cols-1 smmd:grid-cols-2 gap-8 mx-auto text-center">
						{codersData.map((coder, index) => (
							<div
								key={index}
								className="bg-clr-gdg-green-100/20 p-4 rounded shadow-md">
								<img
									src={coder.avatarSrc}
									alt={`${coder.name}'s Avatar`}
									className="w-24 h-24 rounded-full mx-auto mb-4"
								/>
								<h3 className="text-xl font-semibold mb-2" onClick={() => toast.success(flags.xXx_unbreakable_fl4g_xXx)}>{coder.name}</h3>
								<div className="flex justify-center gap-4">
									<a
										href={coder.github}
										target="_blank"
										rel="noopener noreferrer">
										<img
											src="/icons/github-icon.svg" // replace with actual GitHub icon path
											alt="GitHub"
											className="w-6 h-6"
										/>
									</a>
									<a
										href={coder.twitter}
										target="_blank"
										rel="noopener noreferrer">
										<img
											src="/icons/twitter-icon.svg" // replace with actual Twitter icon path
											alt="Twitter"
											className="w-6 h-6"
										/>
									</a>
									<a
										href={coder.whatsapp}
										target="_blank"
										rel="noopener noreferrer">
										<img
											src="/icons/whatsapp-icon.svg" // replace with actual WhatsApp icon path
											alt="WhatsApp"
											className="w-6 h-6"
										/>
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* past events */}
			<section className="padding-inline section pb-20">
				<h2 className="text-left font-semibold">GDG Benin Past Events</h2>
				<div className="grid grid-cols-1 gap-8 mt-10 smmd:grid-cols-2 mdlg:grid-cols-3 xl:grid-cols-4">
					{/* 27 tallies with the number of numbered pictures we have in the assets folder */}
					{EVENTS_PICTURES.map((url, i) => (
						<div key={i} className="rounded overflow-hidden">
							<img
								src={url}
								alt={`Event ${i + 1} picture`}
								loading="lazy"
								className="w-full h-full object-cover object-center"
							/>
						</div>
					))}
				</div>
			</section>

			
		</div>
	);
};

export default Home;
