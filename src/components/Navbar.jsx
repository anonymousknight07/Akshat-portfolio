import React ,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo,menu,close } from '../assets';



const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle,setToggle] = useState(false);
  
  return (
     <nav 
     className={`${styles.paddingX} w-full flex items-center
     py-5 fixed top-0 z-20 bg-primary`}
     >
      <div className="w-full flex justify-between items-center
      max-w-7xl mx-auto">
        <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
        >
        <img src="data:image/png;base64,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"
         alt="logo" className="w-12 h-12 first-letter:object-contain" />
         <p className="text-white text-[18px] font-bold
         cursor-pointer flex">
          Akshat &nbsp;
          <span className="sm:block hidden">| Student of Computer Science</span>
         </p>

        </Link>
        <ul className="list-none hidden sm:flex
        flex-row gap-10">
          {navLinks.map((link)=>(
            <li
               key={link.id}
               className={`${
                active===link.title 
                ?"text-white"
                :"text-secondary"
               }  hover:text-white text-[18px] font-medium cursor-pointer`}
               onClick={()=>setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
          src={toggle ? close :menu }
          alt="menu"
          className="w-[28px] h-[28px] object-contain
          cursor-pointer"
          onClick={()=>setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden': 'flex'} p-6 black-gradient absolute top-20
           right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
           <ul className="list-none flex justify-end items-start flex-col gap-4 ">
                     {navLinks.map((link)=>(
                       <li
                          key={link.id}
                          className={`${
                           active===link.title 
                           ?"text-white"
                           :"text-secondary"
                          } font-poppins font-medium cursor-pointer text-[16px]`}
                          onClick={()=>{
                            setToggle(!toggle);
                            setActive(link.title);
                          }}
                            >
                         <a href={`#${link.id}`}>{link.title}</a>
                       </li>
                     ))}
                   </ul>
            </div>

        </div>

      </div>
     </nav>    
  )
}

export default Navbar