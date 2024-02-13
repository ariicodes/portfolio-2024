/* eslint-disable react/prop-types */
const Modal = ({ title, content, onClose }) => {
	return (
		<div className='fixed inset-0 flex items-center justify-center z-50'>
			<div
				className='w-10/12 bg-slate-900 py-5 px-7 overflow-y-scroll flex flex-col items-center'
				style={{ height: '90svh' }}
			>
				<button
					className='self-end hover:text-pink-300 hover:font-extrabold active:text-pink-300'
					onClick={onClose}
				>
					close
				</button>
				<div>
					<h2 className='text-cyan-300 text-4xl mb-12 font-bold'>{title}</h2>
					{content}
				</div>
			</div>
		</div>
	);
};

export default Modal;
