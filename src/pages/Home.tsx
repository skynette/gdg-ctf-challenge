import PersonCard from "../components/PersonCard/index";
import { PrimaryButton } from "../components/Button";
import { flags } from "../components/constants";

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
								Join the biggest tech community in Benin City
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
								The GDG Benin membership has grown from 15members in 2011 to
								over 1000 in 2023, and has hosted over 50 conferences,
								bootcamps, and code labs.
								<span className="hidden lg:flex">{flags.encrypted_fl4g}</span>
							</p>
							<p>
								Major programs for GDG Benin are: The Women Techmakers (WTM)
								Program, Google IO Extended, DevFest Benin. We also organize
								other trainings on Google and non-google {flags.cipher_fl4g} technologies, Job
								opportunities, Incubation for startups, mentorship for
								beginners, and act as an umbrella for all tech communities in
								Edo state for the effective growth of the Edo Tech Ecosystem.
							</p>
							<p className="text-[10px] text-gray-400 md:hidden">tip: you can find something interesting on desktop mode</p>
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

			{/* past events */}
			<section className="padding-inline section">
				<h2 className="text-left font-semibold">GDG Benin Past Events</h2>
				<div className="grid grid-cols-1 gap-8 mt-10 smmd:grid-cols-2 mdlg:grid-cols-3 xl:grid-cols-4">
					{new Array(3).fill(0).map((_, i) => (
						<div key={i} className="rounded overflow-hidden">
							<img
								src="./assets/history.png"
								alt="History picture"
								className="w-full h-full object-cover object-center"
							/>
						</div>
					))}
				</div>
			</section>

			{/* ctf instructions page */}
			<section className="padding-inline section">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Welcome to our Capture The Flag (CTF) Challenge!</h2>

        <div className="text-left mb-6">
          <h3 className="text-2xl font-semibold mb-2">Challenge Description:</h3>
          <p>
            Hidden within the depths of our website lies a series of intriguing challenges for you to conquer. Your mission, should you choose to accept it, is to discover the hidden flags scattered across our pages. These flags are cleverly concealed, so sharpen your detective skills and embark on this digital adventure.
          </p>
        </div>

        <div className="text-left mb-6">
          <h3 className="text-2xl font-semibold mb-2">How to Participate:</h3>
          <ol className="list-decimal pl-6">
            <li>Navigate through our website and explore its various sections.</li>
            <li>Keep an eye out for clues, anomalies, or anything that seems out of the ordinary.</li>
            <li>Once you've discovered a hidden flag, take note of it. Flags may appear as strings, codes, or unique identifiers (e.g., secret_code_fl4g).</li>
            <li>Head over to the CTF Submission page.</li>
            <li>Choose a unique username for this challenge; this will be how you are identified on the leaderboard.</li>
            <li>Submit the discovered flag along with your chosen username.</li>
          </ol>
        </div>

        <div className="text-left mb-6">
          <h3 className="text-2xl font-semibold mb-2">Scoring:</h3>
          <p>
            Each flag you submit has an associated score based on its difficulty. The more challenging the flag, the higher the score. Your total score will reflect the cumulative points earned from successfully identifying and submitting flags.
          </p>
        </div>

        <div className="text-left mb-6">
          <h3 className="text-2xl font-semibold mb-2">Leaderboard:</h3>
          <p>
            Curious about how you stack up against other participants? Check out the Leaderboard page to see who's leading the pack. Your username and score will be displayed for bragging rights and recognition.
          </p>
        </div>

        <p className="text-lg">Remember, this challenge is all about fun, learning, and testing your skills. Happy flag hunting, and may the code be with you! If you encounter any issues or have questions, feel free to reach out to our support team.</p>

        <p className="text-lg mt-4">Good luck, and may your flags be plentiful! 🚩🕵️‍♂️</p>
      </div>
    </section>
			{/* footer */}
			<footer className=" padding-inline mt-16 py-6 bg-clr-gdg-green flex items-center justify-between">
				<div className="flex gap-x-8 items-center">
					{/* Instagram Icon */}
					<div>
						<a
							href="https://instagram.com/gdgbenin?igshid=YzAwZjE1ZTI0Zg=="
							target="_blank"
							rel="noreferrer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 134 134"
								fill="none">
								<path
									d="M66.7236 0C38.9376 0 30.8112 0.0286644 29.2316 0.159702C23.5294 0.633688 19.9812 1.5315 16.1156 3.45611C13.1365 4.9354 10.7871 6.65014 8.46833 9.05386C4.24545 13.4375 1.68612 18.8305 0.759648 25.2411C0.309207 28.3532 0.17817 28.9879 0.151553 44.8844C0.141316 50.1832 0.151553 57.1568 0.151553 66.5107C0.151553 94.2742 0.182265 102.392 0.31535 103.969C0.776028 109.518 1.6462 113.008 3.48891 116.827C7.01054 124.136 13.7364 129.624 21.6601 131.671C24.4037 132.377 27.4339 132.766 31.3241 132.951C32.9723 133.022 49.7717 133.074 66.5813 133.074C83.391 133.074 100.201 133.053 101.808 132.971C106.312 132.759 108.928 132.408 111.82 131.661C115.749 130.653 119.41 128.8 122.549 126.231C125.687 123.662 128.227 120.438 129.991 116.786C131.798 113.06 132.714 109.436 133.129 104.177C133.219 103.03 133.257 84.7494 133.257 66.4932C133.257 48.234 133.216 29.9871 133.126 28.8405C132.706 23.4966 131.79 19.9033 129.925 16.1053C128.394 12.9962 126.695 10.6744 124.228 8.3004C119.825 4.09492 114.441 1.53559 108.023 0.610143C104.914 0.160725 104.294 0.0276407 88.3857 0H66.7236Z"
									fill="url(#paint0_radial_301_17)"
								/>
								<path
									d="M66.7236 0C38.9376 0 30.8112 0.0286644 29.2316 0.159702C23.5294 0.633688 19.9812 1.5315 16.1156 3.45611C13.1365 4.9354 10.7871 6.65014 8.46833 9.05386C4.24545 13.4375 1.68612 18.8305 0.759648 25.2411C0.309207 28.3532 0.17817 28.9879 0.151553 44.8844C0.141316 50.1832 0.151553 57.1568 0.151553 66.5107C0.151553 94.2742 0.182265 102.392 0.31535 103.969C0.776028 109.518 1.6462 113.008 3.48891 116.827C7.01054 124.136 13.7364 129.624 21.6601 131.671C24.4037 132.377 27.4339 132.766 31.3241 132.951C32.9723 133.022 49.7717 133.074 66.5813 133.074C83.391 133.074 100.201 133.053 101.808 132.971C106.312 132.759 108.928 132.408 111.82 131.661C115.749 130.653 119.41 128.8 122.549 126.231C125.687 123.662 128.227 120.438 129.991 116.786C131.798 113.06 132.714 109.436 133.129 104.177C133.219 103.03 133.257 84.7494 133.257 66.4932C133.257 48.234 133.216 29.9871 133.126 28.8405C132.706 23.4966 131.79 19.9033 129.925 16.1053C128.394 12.9962 126.695 10.6744 124.228 8.3004C119.825 4.09492 114.441 1.53559 108.023 0.610143C104.914 0.160725 104.294 0.0276407 88.3857 0H66.7236Z"
									fill="url(#paint1_radial_301_17)"
								/>
								<path
									d="M66.6929 17.4034C53.3476 17.4034 51.6727 17.4618 46.4312 17.7003C41.2 17.9398 37.6292 18.768 34.5048 19.9832C31.2729 21.2383 28.5313 22.9172 25.8 25.6495C23.0667 28.3809 21.3878 31.1224 20.1286 34.3533C18.9103 37.4787 18.0811 41.0505 17.8457 46.2797C17.6123 51.5212 17.5508 53.1971 17.5508 66.5424C17.5508 79.8877 17.6102 81.5574 17.8477 86.7989C18.0883 92.0302 18.9165 95.6009 20.1306 98.7254C21.3867 101.957 23.0657 104.699 25.798 107.43C28.5283 110.163 31.2698 111.847 34.4997 113.102C37.6262 114.317 41.1979 115.145 46.4282 115.385C51.6697 115.623 53.3435 115.681 66.6878 115.681C80.0341 115.681 81.7038 115.623 86.9453 115.385C92.1766 115.145 95.7514 114.317 98.8779 113.102C102.109 111.847 104.846 110.163 107.577 107.43C110.31 104.699 111.989 101.957 113.248 98.7264C114.456 95.601 115.285 92.0292 115.531 86.7999C115.766 81.5585 115.828 79.8877 115.828 66.5424C115.828 53.1971 115.766 51.5223 115.531 46.2808C115.285 41.0495 114.456 37.4787 113.248 34.3543C111.989 31.1224 110.31 28.3809 107.577 25.6495C104.843 22.9162 102.11 21.2373 98.8748 19.9832C95.7422 18.768 92.1694 17.9398 86.9382 17.7003C81.6967 17.4618 80.028 17.4034 66.6786 17.4034H66.6929ZM62.2847 26.2587C63.593 26.2566 65.0529 26.2587 66.6929 26.2587C79.813 26.2587 81.368 26.3058 86.5491 26.5412C91.3402 26.7603 93.9405 27.5609 95.6726 28.2334C97.9658 29.1241 99.6007 30.1888 101.319 31.9086C103.039 33.6285 104.104 35.2665 104.997 37.5596C105.669 39.2897 106.471 41.89 106.689 46.681C106.924 51.8611 106.976 53.4172 106.976 66.5311C106.976 79.6451 106.924 81.2012 106.689 86.3812C106.47 91.1723 105.669 93.7726 104.997 95.5027C104.106 97.7958 103.039 99.4287 101.319 101.148C99.5996 102.867 97.9668 103.932 95.6726 104.823C93.9425 105.498 91.3402 106.297 86.5491 106.516C81.3691 106.751 79.813 106.803 66.6929 106.803C53.5718 106.803 52.0167 106.751 46.8366 106.516C42.0456 106.295 39.4453 105.494 37.7121 104.822C35.419 103.931 33.781 102.866 32.0612 101.146C30.3413 99.4266 29.2766 97.7928 28.3839 95.4986C27.7113 93.7685 26.9098 91.1682 26.6917 86.3772C26.4562 81.1971 26.4092 79.641 26.4092 66.5189C26.4092 53.3967 26.4562 51.8488 26.6917 46.6688C26.9108 41.8777 27.7113 39.2774 28.3839 37.5453C29.2746 35.2521 30.3413 33.6142 32.0612 31.8943C33.781 30.1744 35.419 29.1098 37.7121 28.2171C39.4443 27.5414 42.0456 26.7429 46.8366 26.5228C51.3697 26.318 53.1264 26.2566 62.2847 26.2464V26.2587ZM92.9229 34.4178C91.7565 34.4178 90.6164 34.7637 89.6466 35.4117C88.6769 36.0597 87.9211 36.9808 87.4748 38.0584C87.0286 39.136 86.9119 40.3217 87.1396 41.4656C87.3673 42.6095 87.9291 43.6602 88.754 44.4848C89.5789 45.3094 90.6298 45.8708 91.7737 46.0981C92.9177 46.3254 94.1034 46.2083 95.1808 45.7617C96.2583 45.3151 97.1791 44.559 97.8268 43.589C98.4745 42.619 98.82 41.4788 98.8195 40.3124C98.8195 37.057 96.1783 34.4157 92.9229 34.4157V34.4178ZM66.6929 41.3075C52.7569 41.3075 41.458 52.6064 41.458 66.5424C41.458 80.4784 52.7569 91.7722 66.6929 91.7722C80.6289 91.7722 91.9247 80.4784 91.9247 66.5424C91.9247 52.6064 80.6279 41.3075 66.6919 41.3075H66.6929ZM66.6929 50.1627C75.7386 50.1627 83.0725 57.4957 83.0725 66.5424C83.0725 75.5881 75.7386 82.9221 66.6929 82.9221C57.6462 82.9221 50.3132 75.5881 50.3132 66.5424C50.3132 57.4957 57.6462 50.1627 66.6929 50.1627Z"
									fill="white"
								/>
								<defs>
									<radialGradient
										id="paint0_radial_301_17"
										cx="0"
										cy="0"
										r="1"
										gradientUnits="userSpaceOnUse"
										gradientTransform="translate(35.5045 143.323) rotate(-90) scale(131.886 122.697)">
										<stop stop-color="#FFDD55" />
										<stop offset="0.1" stop-color="#FFDD55" />
										<stop offset="0.5" stop-color="#FF543E" />
										<stop offset="1" stop-color="#C837AB" />
									</radialGradient>
									<radialGradient
										id="paint1_radial_301_17"
										cx="0"
										cy="0"
										r="1"
										gradientUnits="userSpaceOnUse"
										gradientTransform="translate(-22.1496 9.58639) rotate(78.6776) scale(58.9541 243.072)">
										<stop stop-color="#3771C8" />
										<stop offset="0.128" stop-color="#3771C8" />
										<stop offset="1" stop-color="#6600FF" stop-opacity="0" />
									</radialGradient>
								</defs>
							</svg>
						</a>
					</div>
					{/* X(Twitter) Icon */}
					<div>
						<a
							href="https://x.com/gdgbenin?s=11&t=xxWf1c_2rEN7x3vRW1kfCg"
							target="_blank"
							rel="noreferrer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 322 310"
								fill="none">
								<path
									d="M0 2.71324H95.2341L183.262 121.121L292.834 0L318.868 0.452206L196.241 138.155L322 307.287H226.804L143.719 196.944L42.2215 310H16.6018L131.117 180.814L0 2.71324ZM86.2541 20.1993H35.958L237.18 289.348H286.57L86.2541 20.1993Z"
									fill="white"
								/>
							</svg>
						</a>
					</div>
				</div>
				<p className="text-center text-fs-body-3 text-white">
					© 2023 GDG Benin
				</p>
			</footer>
		</div>
	);
};

export default Home;
