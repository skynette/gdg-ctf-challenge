import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav/Nav";
import { Protected } from "./components/Protected";
import FlagPage from "./pages/FlagPage";
import GameControl from "./pages/GameControl";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";
import Leaderboard from "./pages/Leaderboard";
import SubmitFlag from "./pages/Submit";

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route
						element={
							<>
								<Nav />
								<Protected>
									<Outlet />
								</Protected>
								<Footer />
							</>
						}>
						<Route path="/" element={<Home />} />
						<Route path="/instructions" element={<Instructions />} />
						<Route path="/leaderboard" element={<Leaderboard />} />
						<Route path="/ctf" element={<SubmitFlag />} />
						<Route path="/game-control" element={<GameControl />} />
						<Route
							path="/sxctra249sceahceae34hec/:flag"
							element={<FlagPage />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
			<Toaster />
		</QueryClientProvider>
	);
}
