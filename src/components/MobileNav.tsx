import { Separator } from "@radix-ui/react-separator";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white" />
            </SheetTrigger>
            <SheetContent>
                <SheetTitle className="mb-5">
                    <p>Welcome to EAT24</p>
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    <Button className="text-white bg-green-800 flex-1 font-bold">
                        Log In
                    </Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav