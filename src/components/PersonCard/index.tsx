
interface PersonCardProps {
    flag?: string;
}

const index = ({ flag }: PersonCardProps) => {
    return (
        <article className="bg-clr-gdg-green-100 rounded-md pb-8">
            <div className="text-center grid grid-rows-2">
                <div className="w-[120px] h-[120px] rounded-[50%] overflow-hidden mx-auto -mt-16">
                    <img
                        src="./assets/history.png"
                        alt={`${flag}`}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="mt-4">
                    <h5 className="text-fs-title font-semibold">Dave Testing</h5>
                    <p className="text-fs-body-1">Frontend Engineer</p>
                </div>
            </div>
        </article>
    );
};

export default index;
