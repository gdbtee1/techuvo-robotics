import { motion,useReducedMotion } from 'framer-motion';
export default function Reveal({children,className='',delay=0}){const reduce=useReducedMotion();return <motion.div className={className} initial={reduce?false:{opacity:0,y:24}} whileInView={reduce?{}:{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.55,delay,ease:[.2,.7,.2,1]}}>{children}</motion.div>}
