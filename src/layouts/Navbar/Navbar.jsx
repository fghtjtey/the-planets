//from components
import { NavLinks } from "../../components";


function Navbar({setActivePlanet}) {
  console.log(setActivePlanet);

    return (
      <header className="pl-8 pr-10 pt-6 pb-6 border-b border-b-white20 flex items-center justify-between">
        <a className="font-antonio text-[1.75rem] tracking-[-1px]" href="/">THE PLANETS</a>

          <NavLinks setActivePlanet={setActivePlanet}/>
      </header>
    )
  } 

export default Navbar
