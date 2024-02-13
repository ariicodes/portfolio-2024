import { useState } from 'react';
import logo from '../assets/imgs/logo-rectangle.png';
import Modal from './Modal';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

const Layout = () => {
	let today = new Date();
	let currentYear = today.getFullYear();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState({ title: '', content: '' });

	// Function to handle opening the modal and setting content
	const handleOpenModal = (title, content) => {
		setIsModalOpen(true);
		setModalContent({ title, content });
	};

	// Function to handle closing the modal
	const handleCloseModal = () => {
		setIsModalOpen(false);
		setModalContent({ title: '', content: '' }); // Reset modal content
	};

	return (
		<div className='flex flex-col justify-between items-center h-screen text-center relative'>
			{isModalOpen && (
				<Modal
					title={modalContent.title}
					content={modalContent.content}
					onClose={handleCloseModal}
				/>
			)}
			<header className='mt-24 flex flex-col items-center border-b pb-10'>
				<img className='mb-12 w-56' src={logo} alt='white ariicodes logo' />
				<h1 className='text-5xl mb-3 font-bold'>Ariela Israel</h1>
				<h2 className='text-3xl tracking-wider uppercase'>Software Engineer</h2>
			</header>
			<main className='w-screen flex flex-col items-center'>
				<nav className='bg-gradient-to-b from-transparent via-slate-950/50 to-transparent py-10 w-80'>
					<ul className='flex flex-col items-center font-medium divide-y divide-pink-400'>
						<li
							onClick={() => handleOpenModal('ABOUT', <About />)}
							className='hover:text-cyan-300 hover:font-extrabold active:text-cyan-300 active:font-extrabold pb-5'
						>
							ABOUT
						</li>
						<li
							onClick={() => handleOpenModal('SKILLS', <Skills />)}
							className='hover:text-cyan-300 hover:font-extrabold active:text-cyan-300 active:font-extrabold py-5'
						>
							SKILLS
						</li>
						<li
							onClick={() => handleOpenModal('PROJECTS', <Projects />)}
							className='hover:text-cyan-300 hover:font-extrabold active:text-cyan-300 active:font-extrabold py-5'
						>
							PROJECTS
						</li>
						<li
							onClick={() => handleOpenModal('RESUME', <Resume />)}
							className='hover:text-cyan-300 hover:font-extrabold active:text-cyan-300 active:font-extrabold py-5'
						>
							RESUME
						</li>
						<li
							onClick={() => handleOpenModal('CONTACT', <Contact />)}
							className='hover:text-cyan-300 hover:font-extrabold active:text-cyan-300 active:font-extrabold py-5'
						>
							CONTACT
						</li>
					</ul>
				</nav>
			</main>
			<footer className='mb-6'>
				<p>
					<a
						href='https://github.com/ariicodes/portfolio_v2'
						target='_blank'
						rel='noreferrer'
					>
						VIEW THIS REPO
					</a>{' '}
					<span className='text-pink-400'>|</span>{' '}
					<span className='font-light italic'>
						© Ariela Israel {currentYear}
					</span>
				</p>
				<p className='font-thin'>
					Photo by{' '}
					<a
						href='https://unsplash.com/@alesnesetril?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
						target='_blank'
						rel='noreferrer'
					>
						Ales Nesetril
					</a>{' '}
					on{' '}
					<a
						href='https://unsplash.com/photos/gray-and-black-laptop-computer-on-surface-Im7lZjxeLhg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
						target='_blank'
						rel='noreferrer'
					>
						Unsplash
					</a>
				</p>
			</footer>
		</div>
	);
};

export default Layout;
