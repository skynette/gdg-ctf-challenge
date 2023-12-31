import { ReactNode, useState } from "react"

const Modal = ({children, handleClose}: {children: ReactNode, handleClose: () => void}) => {
  return (
    <div className="fixed inset-0 z-[3] w-full h-full bg-black/50 flex items-center justify-center px-4">
      <div className="bg-clr-gdg-green-100 p-8 rounded-lg flex flex-col gap-y-8 max-w-md">
        <span className="text-fs-h5 font-semibold text-clr-gdg-red cursor-pointer self-end" onClick={handleClose}>X</span>
        {children}
      </div>
    </div>
  )
}

export const ModalText = ({
	children,
	qrCodeSVG,
	className = "text-fs-body-1 text-clr-gdg-green-700",
}: {
	children: ReactNode;
	qrCodeSVG: ReactNode;
	className?: string;
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpen = () => {
		setIsModalOpen(true);
	};

	const handleClose = () => {
		setIsModalOpen(false);
	};
	return (
		<>
			<span
				className={`text-center cursor-pointer ${className}`}
				onClick={handleOpen}>
				{children}
			</span>
			{isModalOpen && <Modal handleClose={handleClose}>{qrCodeSVG}</Modal>}
		</>
	);
};

export default Modal