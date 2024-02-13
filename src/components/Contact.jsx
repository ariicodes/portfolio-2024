import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
	const [state, handleSubmit] = useForm('mzbwgkwj');
	if (state.succeeded) {
		return (
			<>
				<p>Thanks for contacting!</p>
				<p>Please be on the lookout for a response.</p>
			</>
		);
	}
	return (
		<form onSubmit={handleSubmit} className='flex flex-col h-full justify-center items-center'>
			<div className='flex flex-col gap-5'>
				<div className='flex flex-col items-end'>
					<label htmlFor='name'>Name</label>
					<input
						id='name'
						type='name'
						name='name'
						className='w-72 text-slate-950 p-1 mt-1'
					/>
					<ValidationError prefix='Name' field='name' errors={state.errors} />
				</div>
				<div className='flex flex-col items-end'>
					<label htmlFor='phone'>Phone</label>
					<input
						id='phone'
						type='phone'
						name='phone'
						className='w-72 text-slate-950 p-1 mt-1'
					/>
					<ValidationError prefix='Phone' field='phone' errors={state.errors} />
				</div>
				<div className='flex flex-col items-end'>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						type='email'
						name='email'
						className='w-72 text-slate-950 p-1 mt-1'
					/>
					<ValidationError prefix='Email' field='email' errors={state.errors} />
				</div>
				<div className='flex flex-col items-end'>
					<label htmlFor='contact-reason'>Reason for Contacting</label>
					<div className='flex flex-col gap-2'>
						<select
							id='contact-reason'
							name='contact-reason'
							className='w-72 text-slate-950 p-1 mt-1'
						>
							<option value='career-opp'>Career Opportunity</option>
							<option value='project-collab'>Project Collaboration</option>
							<option value='other'>
								Other <span>(Specify Below)</span>
							</option>
						</select>
						<ValidationError
							prefix='Contact'
							field='contact-reason'
							errors={state.errors}
						/>
						<textarea
							name='other-reason'
							id='other-reason'
							rows='6'
							className='w-72 text-slate-950 p-1 mt-1'
						></textarea>
						<ValidationError
							prefix='Other'
							field='other-reason'
							errors={state.errors}
						/>
					</div>
				</div>
			</div>
			<button
				className='w-40 mt-6 bg-slate-950 text-slate-100 hover:bg-pink-800 active:bg-pink-800 p-1.5'
				type='submit'
				disabled={state.submitting}
			>
				Submit
			</button>
		</form>
	);
};

export default Contact;
