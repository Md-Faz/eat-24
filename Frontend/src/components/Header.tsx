import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="flex bg-green-800 text-white justify-between gap-16 items-center">
            <div className="m-4 flex gap-2 items-center">
                <img height={60} width={60} src=".\src\assets\logo-no-background.png" />
                <Link to='/' className="text-3xl font-bold tracking-tight ">EAT24</Link>

            </div>
            <div className=" flex gap-3 text-md m-4  ">
                <h3>LOGIN</h3>
                <h3>LOGIN</h3>
            </div>
        </div>

    )
}

export default Header