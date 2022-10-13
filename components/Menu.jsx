import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@config";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
const Menu = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delay: 0.1,
            },
        },
    };

    const listItem = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    return (
        <motion.nav>
            <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className="flex items-center gap-x-4"
            >
                <AnimatePresence>
                    {navLinks.map((link) => (
                        <motion.li key={link.url} variants={listItem}>
                            <Link href={link.url}>
                                <a>{link.name}</a>
                            </Link>
                        </motion.li>
                    ))}
                    <motion.li variants={listItem}>
                        <ThemeSwitch key="theme-switch" />
                    </motion.li>
                </AnimatePresence>
            </motion.ul>
        </motion.nav>
    );
};

export default Menu;
