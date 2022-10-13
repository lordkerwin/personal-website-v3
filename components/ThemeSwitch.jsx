import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const SvgWrapper = ({ name, children }) => {
    return (
        <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
            key={name}
            initial={{ opacity: 0, rotate: 45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45, transition: { duration: 0.1 } }}
        >
            {children}
        </motion.svg>
    );
};

const SunSvg = (
    <SvgWrapper name="sun">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </SvgWrapper>
);

const MoonSvg = (
    <SvgWrapper name="moon">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </SvgWrapper>
);

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        if (theme === "dark") {
            return setTheme("light");
        }
        return setTheme("dark");
    };

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative rounded w-8 h-8 flex items-center justify-center"
        >
            {mounted && (
                <AnimatePresence mode="wait" initial={false}>
                    {theme === "light" ? SunSvg : MoonSvg}
                </AnimatePresence>
            )}
        </motion.button>
    );
};

export default ThemeSwitch;
