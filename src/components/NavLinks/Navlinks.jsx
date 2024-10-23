import navbar from "../../layouts/Navbar/Navbar";
import {Link} from "react-router-dom";

const links = [
    {
        path: "/",
        title: "mercury",
    },
    {
        path: "/",
        title: "venus",
    },
    {
        path: "/",
        title: "earth",
    },
    {
        path: "/",
        title: "mars",
    },
    {
        path: "/",
        title: "jupiter",
    },
    {
        path: "/",
        title: "saturn",
    },
    {
        path: "/",
        title: "uranus",
    },
    {
        path: "/",
        title: "neptune",
    },
]

function Navlinks({setActivePlanet}) {

    function changeActivePlanet(planetName) {
        console.log(planetName);
    }

    return (
       <nav>
           <ul className="flex items-center gap-8">
               {links.map(link => {
                    return <li key={link.title}>
                        <a onClick={()=> changeActivePlanet(link.title)} className="uppercase font-bold text-[0.688rem] tracking-[1px]" href="/">{link.title}</a>
                    </li>
               })}
           </ul>
       </nav>
    )
}

export default Navlinks