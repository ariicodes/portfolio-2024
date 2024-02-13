import HTML from '../assets/imgs/Html5.png';
import CSS from '../assets/imgs/CSS3.png';
import JS from '../assets/imgs/JavaScript.png';
import TS from '../assets/imgs/TypeScript.png';
import Sass from '../assets/imgs/SassAvatar.png';
import Bootstrap from '../assets/imgs/Bootstrap.png';
import Tailwind from '../assets/imgs/Tailwindcss.png';
import React from '../assets/imgs/ReactNative.png';
import Express from '../assets/imgs/ExpressJs.png';
import NodeJs from '../assets/imgs/NodeJs.png';
import Mongo from '../assets/imgs/MongoDB.png';
import Postgres from '../assets/imgs/PostgreSQL.png';
import Rest from '../assets/imgs/RestAPI.png';
import Ai from '../assets/imgs/AdobeIllustrator.png';
import Ps from '../assets/imgs/AdobePhotoshop.png';
import Xd from '../assets/imgs/AdobeXD.png';
import Figma from '../assets/imgs/Figma.png';

const Skills = () => {
	return (
		<div className='flex flex-col gap-y-11'>
			<div>
				<h3 className='text-xl'>Frontend</h3>
				<div>
					<div className='flex flex-row gap-4'>
						<img className='w-16' src={HTML} alt='HTML icon' />
						<img className='w-16' src={CSS} alt='CSS icon' />
						<img className='w-16' src={JS} alt='JavaScript icon' />
						<img className='w-16' src={TS} alt='TypeScript icon' />
					</div>
					<div className='flex flex-row gap-4'>
						<img className='w-16' src={Sass} alt='Sass icon' />
						<img className='w-16' src={Bootstrap} alt='Bootstrap icon' />
						<img className='w-16' src={Tailwind} alt='Tailwind icon' />
						<img className='w-16' src={React} alt='React icon' />
					</div>
				</div>
			</div>
			<div>
				<h3 className='text-xl'>Backend</h3>
				<div>
					<div className='flex flex-row gap-4 justify-center'>
						<img className='w-16' src={Express} alt='Express icon' />
						<img className='w-16' src={NodeJs} alt='Node icon' />
						<img className='w-16' src={Mongo} alt='MongoDB icon' />
					</div>
					<div className='flex flex-row gap-4 justify-center'>
						<img className='w-16' src={Postgres} alt='PostgreSQL icon' />
						<img className='w-16' src={Rest} alt='REST API icon' />
					</div>
				</div>
			</div>
			<div>
				<h3 className='text-xl'>Design</h3>
				<div>
					<div className='flex flex-row gap-4'>
						<img className='w-16' src={Ai} alt='Adobe Illustrator icon' />
						<img className='w-16' src={Ps} alt='Adobe Photoshop icon' />
						<img className='w-16' src={Xd} alt='Adobe Xd icon' />
						<img className='w-16' src={Figma} alt='Figma icon' />
					</div>
				</div>
			</div>
			<div>
				<h3 className='text-xl'>Additional Skills</h3>
				<div className='text-sm tracking-wide'>
					<p>VS Code • Git • GitHub • NPM • Axios</p>
					<p>Jest • Mocha • Chai • Knex • Postman</p>
					<p>DBeaver • Render • Vercel • Firebase • Heroku</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;
