import { Link } from "react-router-dom"
import { flags } from "../components/constants"

const Instructions = () => {
  return (
			<section className="padding-inline section my-8 ">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-bold mb-6">
						Welcome to our Capture The Flag (CTF) Challenge!
					</h2>

					<div className="text-left mb-6">
						<h3 className="text-2xl font-semibold mb-2">
							Challenge Description:
						</h3>
						<p>
							Hidden within the depths of our website lies a series of
							intriguing challenges for you to conquer. Your mission, should you
							choose to accept it, is to discover the hidden flags scattered
							across our pages. These flags are cleverly concealed, so sharpen
							your detective skills and embark on this digital adventure.
						</p>
					</div>

					<div className="text-left mb-6">
						<h3 className="text-2xl font-semibold mb-2">How to Participate:</h3>
						<ol className="list-decimal pl-6">
							<li>
								Navigate through our website and explore its various sections.
							</li>
							<li>
								Keep an eye out for clues, anomalies, or anything that seems out
								of the ordinary.
							</li>
							<li>
								Once you've discovered a hidden flag, take note of it. Flags may
								appear as strings, codes, or unique identifiers (e.g.,
								secret_code_fl4g).
							</li>
							<li>Head over to the <Link to="/ctf" className="text-clr-gdg-green">CTF Submission page</Link>.</li>
							<li>
								Choose a unique username for this challenge; this will be how
								you are identified on the leaderboard.
							</li>
							<li>
								Submit the discovered flag along with your chosen username.
							</li>
						</ol>
					</div>

					<div className="text-left mb-6">
						<h3 className="text-2xl font-semibold mb-2">Scoring:</h3>
						<p>
							Each flag you submit has an associated score based on its
							difficulty. The more challenging the flag, the higher the score.
							Your total score will reflect the cumulative points earned from
							successfully identifying and submitting flags.
						</p>
					</div>

					<div className="text-left mb-6">
						<h3 className="text-2xl font-semibold mb-2">Leaderboard:</h3>
						<p>
							Curious about how you stack up against other participants? Check
							out the Leaderboard page to see who's leading the pack. Your
							username and score will be displayed for bragging rights and
							recognition.
						</p>
						<p>Here is a bonus one to get started <span className="text-clr-gdg-green">{flags.easy_fl4g}</span></p>
					</div>

					<p className="text-lg">
						Remember, this challenge is all about fun, learning, and testing
						your skills. Happy flag hunting, and may the code be with you! If
						you encounter any issues or have questions, feel free to reach out
						to our support team.
					</p>

					<p className="text-lg mt-4">
						Good luck, and may your flags be plentiful! 🚩🕵️‍♂️
					</p>
				</div>
			</section>
  )
}

export default Instructions