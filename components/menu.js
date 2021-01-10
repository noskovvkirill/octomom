import {motion} from 'framer-motion'
import Image from 'next/image'

const Menu = ({isOpen, toggle}) =>{
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "200%" },
      }

    return(
        <motion.nav className='menu'  initial={{x:"200%", opacity:0}}   transition={{ duration: 1.5 }} animate={isOpen ? "open" : "closed"}
            variants={variants}>
             <div className='menuempty'>
             <Image src={'/womb.gif'} alt={'womb-animation'} width="100%" height="100%" layout="responsive"/>

             </div>
            <div className='menucontainer'>
                <div className='menurow'>
                <motion.button onClick={toggle}   whileHover={{ scale: 1.1 }}>
                    <Image src={'/close.svg'} alt={'menu'} width="32px" height="32px" layout="responsive"/>
                </motion.button>
                STORE MENU
                </div>
                <div className='menurow'>
                <Image src={'/store/1.jpg'} alt={'womb-store'} width="300px" height="300px" />
                <Image src={'/store/2.jpg'} alt={'womb-store'} width="300px" height="300px" />
                <Image src={'/store/3.jpg'} alt={'womb-store'} width="300px" height="300px" />
                </div>
                <div className='menurow'>
                <Image src={'/store/4.jpg'} alt={'womb-store'} width="300px" height="300px" />
                <Image src={'/store/5.jpg'} alt={'womb-store'} width="300px" height="300px" />
                <Image src={'/store/6.jpg'} alt={'womb-store'} width="300px" height="300px" />
                </div>
            </div>
        </motion.nav>
    )
}

export default Menu 