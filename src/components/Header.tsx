import { Link } from "react-router-dom"
import MobileNav from "./MobileNav"
import MainNav from "./MainNav"

const Header = () => {
    return (
        <div className="flex bg-green-800 text-white justify-between items-center">
            <div className="m-4 flex gap-2 items-center">
                <Link to='/'>
                    <img className="cursor-pointer" height={50} width={50} src=".\src\assets\logo-white.png" />
                </Link>
                <Link to='/' className="text-3xl font-bold tracking-tight ">EAT24</Link>
            </div>

            <div className="text-md m-4 block md:hidden">
                <MobileNav />
            </div>

            <div className=" gap-3 text-md m-4 md:block hidden">
                <MainNav />
            </div>
        </div>
    )
}

export default Header