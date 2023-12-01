import toast from "react-hot-toast";

interface PersonCardProps {
  name: string;
  role: string;
  flag?: string;
}

const index = ({ flag, role, name }: PersonCardProps) => {
    const handleTap = () => {
        // Check if flag is defined before showing the toast
        if (flag !== undefined) {
          toast.success(`Found a flag ${flag}`);
        }
      };

  return (
    <article
      className="bg-clr-gdg-green-100/20 rounded-md py-8 px-4 shadow-card"
      onClick={handleTap}
    >
      <div className="text-center ">
        <h5 className="text-fs-body-3 font-semibold">{name}</h5>
        <p className="text-fs-body-1">{`${role} ${flag || ""}`}</p>
      </div>
    </article>
  );
};

export default index;
