import Image from 'next/image'
import Menu from '../components/menu'
import {useState, useCallback} from 'react'
import {motion} from 'framer-motion'
import {
    RecoilRoot
  } from 'recoil';

const Layout = ({children}) =>{
    const [isOpen, openMenu] = useState(false)

    const toggleMenu = useCallback(() =>{
        openMenu(!isOpen)
    })

    return(
        // <RecoilRoot>
        
        <div className="main">
            <div className="running">
                <div className="runningline">
                    HELLO EVERYONE AND THANKS FOR COMING! TODAY WE GONNA TALK IN OUR SHOW ABOUT OCTOMOM. HAVE YOU HEADER ABOUT HEAR BEFORE? THERE IS SOMETHING YOU SHOULD KNOW ABOUT HER BEFORE WE BEGIN: SHE HAD 8 BABIES AT THE SAME TIME! AND NOW SHE IS READY TO REVEAL ALL HER SECREATES. GET READY AND ASK YOUR QUESTIONS!
                </div>
            </div>
            <div className="header">
                <span>Octomom</span>
                <div>
                    <motion.button onClick={toggleMenu}  whileHover={{ rotate: 90 }}  whileTap={{ rotate: 180 }}>
                        <Image src={'/menu.svg'} alt={'menu'} width="32px" height="32px" layout="responsive"/>
                    </motion.button>
                </div>
                <Menu isOpen={isOpen} toggle={toggleMenu}/>
            </div>
            {children}
            <footer>
                <span>KABK GRAPHIC DESIGN</span>
                <span>2020</span>
                <span>IMD SEMESTER 1</span>
            </footer>
        </div>
        // {/* </RecoilRoot> */}
    )
}

export default Layout 