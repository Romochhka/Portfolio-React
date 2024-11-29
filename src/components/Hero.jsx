import image from '/public/photo_2024-10-16_12-53-46.jpg'
import {motion} from "framer-motion";

const Hero = () => {
    return (
        <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
            <div className='flex flex-col items-center justify-center gap-10 text-white'>
                <motion.div
                initial={{y: -50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 0.2}}

                >
                    <img src={image} alt='' className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[250px]"/>
                </motion.div>

                <motion.div
                    initial={{y: 50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.2}}

                    className="flex max-w-[600px] flex-col items-center
                justify-center gap-3 text-center">
                <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent
     text-5xl font-light md:text-6xl">Ramzat Ruslanov</h1>
                    <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent
     text-2xl md:text-3xl">Frontend Developer</h3>
                    <p className="md:text-base text-pretty text-sm text-gray-400">
                        Hi! My name is Ramzat Ruslanov, I’m 20 years old, and I’m a passionate frontend developer. I specialize in creating modern and user-friendly web applications using JavaScript, and React.
                        Currently, I’m studying at the International Information Technology University, where I continue to improve my skills and work on exciting projects. My goal is to build applications that combine sleek design with ease of use.
                        I’m always eager to grow and take on new professional challenges. If you’re looking for a dedicated and enthusiastic developer, I’d be happy to discuss collaboration!
                    </p>
                </motion.div>
            </div>
        </div>

    )
}

export default Hero;