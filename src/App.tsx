import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import Home from "./pages/Home";
import SubmitFlag from "./pages/Submit";
import { Toaster } from 'react-hot-toast';
import Nav from "./components/Nav/Nav";
import FlagPage from "./pages/FlagPage";
import Instructions from "./pages/Instructions";
import Footer from "./components/Footer";
import GameControl from "./pages/GameControl";
import { Protected } from "./components/Protected";

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
						<Route path="/sxctra249sceahceae34hec/:flag" element={<FlagPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<Toaster />
		</QueryClientProvider>
	);
}
