import { Button } from "./ui/button"

const handleClick = () => {

}

export const MainNav = () => {
    return (
        <Button
            onClick={handleClick}
            className="text-green-800 bg-white text-lg hover:bg-slate-200">
            Log In
        </Button>
    )
}

export default MainNav