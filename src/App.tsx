import ActivityCard from "./components/ActivityCard";
import { PrimaryButton } from "./components/Button";
import Nav from "./components/Hero/Nav";
import PersonCard from "./components/PersonCard";

export default function App() {
    return (
        <>
            {/* hero section */}
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
                            <PrimaryButton text="Join the Community" />
                        </div>
                    </div>
                </div>
            </div>

            {/* history section */}
            <div>
                <div className="padding-inline grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="grid grid-cols-12 grid-rows-6">
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
                    </div>

                    <div className="pt-20">
                        <h2 className="">Brief History of GDG Benin</h2>
                        <div className="flex flex-col gap-4">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Doloribus neque enim quos culpa molestias sunt similique placeat
                                molestiae, alias rerum est temporibus maxime velit voluptates
                                quidem ab eveniet eligendi mollitia.
                            </p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Doloribus neque enim quos culpa molestias sunt similique placeat
                                molestiae, alias rerum est temporibus maxime velit voluptates
                                quidem ab eveniet eligendi mollitia.
                            </p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Doloribus neque enim quos culpa molestias sunt similique placeat
                                molestiae, alias rerum est temporibus maxime velit voluptates
                                quidem ab eveniet eligendi mollitia.
                            </p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Doloribus neque enim quos culpa molestias sunt similique placeat
                                molestiae, alias rerum est temporibus maxime velit voluptates
                                quidem ab eveniet eligendi mollitia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* founder section */}
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

            {/* activities */}
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

            {/* team */}
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

            {/* past events */}
            <section className="padding-inline section">
                <h2 className="text-left">GDG Benin Past Events</h2>
                <div className="grid grid-cols-1 gap-8 mt-10 smmd:grid-cols-2 mdlg:grid-cols-3 xl:grid-cols-4">
                    {(new Array(10)).fill(0).map((_, i) => (<div key={i} className="rounded overflow-hidden"><img src="./assets/history.png" alt="History picture" className="w-full h-full object-cover object-center" /></div>))}
                </div>
            </section>

            {/* footer */}
            <footer className="mt-16 py-6 bg-clr-gdg-blue-100">
                <p className="text-center text-fs-body-3">© 2023 GDG Benin</p>
            </footer>
        </>
    );
}
