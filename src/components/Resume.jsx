import Res from '../assets/docs/ariela-israel-1-24.png';
import ResDoc from '../assets/docs/ariela-israel-1-24.pdf';

const Resume = () => {
	return (
		<div className='md:flex md:flex-col md:items-center'>
			<img className='w-100 md:w-1/3' src={Res} alt="Ariela Israel's resume" />
			<a
				href={ResDoc}
				target='_blank'
				rel='noreferrer'
				className='text-2xl md:text-3xl mt-4 hover:text-cyan-300 hover:font-extrabold active:text-cyan-300'
			>
				Click here to download
			</a>
		</div>
	);
};

export default Resume;
