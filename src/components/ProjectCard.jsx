/* eslint-disable react/prop-types */
const ProjectCard = ({
	imgSrc,
	altTxt,
	title,
	link,
	repo,
	description,
	technologies,
}) => {
	return (
		<div className='h-[30rem] w-72 border border-pink-500'>
			<div className='h-40 bg-white'>
				<img className="h-full w-full" src={imgSrc} alt={altTxt} />
			</div>
			<div className='mt-4'>
				<h3 className="font-bold">{title}</h3>
				<div className='mt-4'>
					<div className='flex flex-row justify-around px-8 mb-2'>
						<a href={link} target='_blank' rel='noreferrer'>
							Link
						</a>
						<p>|</p>
						<a href={repo} target='_blank' rel='noreferrer'>
							Repo
						</a>
					</div>
					<div className='flex flex-col gap-3 px-4'>
						<hr />
						<p className='text-xs text-left'>{description}</p>
						<hr />
						<p className='text-xs'>{technologies}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
