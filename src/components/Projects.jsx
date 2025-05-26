import image1 from '/public/react-sneakers.png'
import image2 from '/public/mern.png'
import { motion } from "framer-motion"

const projectsData = [
	{
		image: image1,
		title: 'React-Sneakers',
		description: 'Developed a modern eCommerce web application using React. The project features a dynamic product catalog where users can browse items and add them to a shopping cart. Product data is fetched from MockAPI, while all cart interactions are managed through React Hooks for smooth state handling. The application also includes a responsive user interface styled with SCSS, providing a clean and intuitive shopping experience. Additionally, Firebase was integrated for storing and managing order data, ensuring reliable data handling. The project emphasizes clean component architecture, efficient REST API communication, and seamless user interaction.',
		technologies: ['React','MockAPI,Firebase','SCSS'],
	},
	{
		image: image2,
		title: 'MERN - Social Network ',
		description: 'Developed a full-stack blogging platform using React, Node.js, Express, and MongoDB. The application allows users to register and log in, create, edit, and delete posts with images, leave comments, and view posts from other users. Comments are stored in a separate collection and linked to posts through references, ensuring clean and scalable data management. The interface is built with React, featuring a dynamic and responsive layout, and React Hooks are used for efficient state management. Image uploads are handled through the server-side using Express-FileUpload, and all interactions between the frontend and backend are performed via Axios. The project emphasizes modular architecture, RESTful API design, and a clean, intuitive UI.',
		technologies: ['React','Redux Toolkit,Node,js','Express.js','MongoDB + Mongoose'],
	},
]

const ScrollReveal = ({children}) => {
	return (
		<motion.dov
		initial={{opacity: 0, y:100}}
		whileInView={{opacity: 1, y:0}}
		viewport={{once:true}}
		transition={{duration: 0.8}}>
			{children}
		</motion.dov>
	)
}

const ProjectCard = ({ project }) => {
	return (
		<ScrollReveal>
		<div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
			<img src={project.image} alt='' className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px] '/>
			<div className='flex flex-col gap-5'>
			<div className='flex flex-col gap-3'>
				<div className='text-xl font-semibold'>{project.title}</div>
				<p className='text-gray-400'>{project.description}</p>
			</div>

				<div className='flex flex-wrap gap-5'>
					{
						project.technologies.map((tech, index) => (
							<span key={index} className='rounded-lg bg-black p-3'>
								{tech}
							</span>
						))
					}
				</div>

		</div>
		</div>
			</ScrollReveal>
	)
}

const Projects = () => {
	return (
		<div id='projects' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24'>
<ScrollReveal>
			<h1 className='text-4xl font-light text-white md:text-6xl'>
				My projects
			</h1>
		</ScrollReveal>
			<div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
				{
					projectsData.map((project, index) => (
						<ProjectCard key={index} project={project} />
					))
				}
			</div>
		</div>
	)
}

export default Projects;