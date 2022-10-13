import Menu from "./Menu";
import { LayoutGroup } from "framer-motion";
import Link from "next/link";

const Header = () => {
    return (
        <header className="py-2">
            <div className="container">
                <div className="flex items-center justify-between">
                    <Link href="/">Sean Kerwin</Link>
                    <Menu />
                </div>
            </div>
        </header>
    );
};

export default Header;
