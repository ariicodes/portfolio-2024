import ProjectCard from './ProjectCard';
import Shyne from '../assets/imgs/shyne-weather.png';
import Periodic from '../assets/imgs/periodic-tables.png';
import Decoder from '../assets/imgs/decoder-ring.png';

const Projects = () => {
	return (
		<div className='flex flex-col gap-6 md:flex-row md:gap-16'>
			<ProjectCard
				imgSrc={Shyne}
				altTxt='Screenshot of Shyne Weather App'
				title='Shyne Weather App'
				link='https://shyne-weather.web.app/'
				repo='https://github.com/ariicodes/shyne-weather'
				description='Shyne Weather App is a web application that utilizes the OpenWeather API to display weather data based on user input of a city or zip code. It is built using React and styled with Tailwind CSS. The primary objective of this project is to demonstrate proficiency in consuming API data and displaying it dynamically, as well as showcasing the ability to develop a Single Page Application (SPA).'
				technologies='React • TailwindCSS • OpenWeather API'
			/>
			<ProjectCard
				imgSrc={Periodic}
				altTxt='Screenshot of Periodic Tables Reservation App'
				title='Periodic Tables Reservation App'
				link='https://periodic-tables-79m6.onrender.com'
				repo='https://github.com/ariicodes/periodic-tables-restaurant-reservation'
				description='Periodic Tables is a web application that allows users to make reservations at a restaurant. It is built using React and styled with Bootstrap. The primary objective of this project is to demonstrate proficiency in building a full-stack application, including the ability to create and manage a database, as well as the ability to create a user interface that allows users to interact with the database.'
				technologies='React • Bootstrap • Express • Knex • PostgreSQL'
			/>
			<ProjectCard
				imgSrc={Decoder}
				altTxt='Screenshot of Decoder Ring project'
				title='Decoder Ring'
				link='https://decoder-ring.ariicodes.com/'
				repo='https://github.com/ariicodes/decoder-ring'
				description='Decoder Ring is a web application that allows users to encode and decode messages using various ciphers. It is built using JavaScript and styled with Bootstrap. The primary objective of this project is to test my ability to engineer complex algorithms and unit tests using Mocha & Chai, as well as the ability to create a user interface that allows users to interact with the algorithms.'
				technologies='JavaScript • Bootstrap • Mocha • Chai'
			/>
		</div>
	);
};

export default Projects;
