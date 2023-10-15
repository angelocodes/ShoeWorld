import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { hamburger } from '../assets/icons';

function Nav() {
  return (
    <header
      className="padding-x py-8 absolute 
    z-10 w-full"
    >
      <nav
        className="flex justify-between 
      items-center max-container"
      >
        <a href="/" className="flex  gap-2">
          <img src={headerLogo} alt="Logo"
            width={40} height={29} />
          <p className="text-lg text-blue-400 
        font-bold pt-2" >Shoe World </p>
        </a>
        
        <ul
          className="flex-1 flex justify-center
         items-center gap-16 max-lg:hidden"
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat
              leading-normal text-lg text-slate-500 "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
