"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { INavItem } from "@/types";
import Row from "@/components/core/Row";

const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: INavItem[];
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => closeMenu();
    // Since Next.js 13, use router events if needed, but for now, close on link click
    return () => {};
  }, [closeMenu]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex w-fit fixed top-4 inset-x-0 mx-auto border border-white/[0.25] rounded-full bg-[var(--dialogColor50)] backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 py-3 items-center space-x-4",
            className
          )}
        >
          <Row classNames="w-full justify-center items-center">
            {/* Hamburger button for mobile */}
            <button
              onClick={toggleMenu}
              className="sm:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-neutral-50 hover:text-[var(--primaryColor)] transition-colors"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </button>

            <Row classNames="hidden sm:flex gap-4 items-center">
              {navItems.map((navItem: INavItem, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative flex items-center space-x-1 text-neutral-50 group"
                  )}
                >
                  {/* Icon with the same style and hover effect */}
                  <span className="block sm:hidden relative overflow-hidden">
                    <span className="relative z-10">
                      <FontAwesomeIcon
                        id={`nav-item-icon${idx}`}
                        icon={navItem.icon}
                        title={navItem.name}
                      />
                    </span>
                    <span className="absolute inset-0 text-[var(--primaryColor)] transition-transform transform translate-y-full group-hover:translate-y-0 duration-300 ease-in-out z-10">
                      <FontAwesomeIcon
                        id={`nav-item-icon${idx}-hover`}
                        icon={navItem.icon}
                        title={navItem.name}
                      />
                    </span>
                  </span>

                  <span className="hidden sm:block text-sm/6 lg:text-base relative overflow-hidden">
                    <span className="relative z-10">{navItem.name}</span>
                    <span className="absolute inset-0 text-[var(--primaryColor)] transition-transform transform translate-y-full group-hover:translate-y-0 duration-300 ease-in-out z-10">
                      {navItem.name}
                    </span>
                  </span>
                </Link>
              ))}
            </Row>
          </Row>
        </motion.div>
      </AnimatePresence>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[4999] bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
            role="presentation"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-[var(--dialogColor)] shadow-xl"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-labelledby="mobile-menu-title"
            >
              <div className="p-6">
                <h2 id="mobile-menu-title" className="sr-only">Navigation Menu</h2>
                <nav className="space-y-4">
                  {navItems.map((navItem: INavItem, idx: number) => (
                    <Link
                      key={`mobile-link=${idx}`}
                      href={navItem.link}
                      onClick={closeMenu}
                      className="flex items-center space-x-3 text-neutral-50 hover:text-[var(--primaryColor)] transition-colors min-h-[44px] py-2"
                    >
                      <FontAwesomeIcon icon={navItem.icon} />
                      <span className="text-base">{navItem.name}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNavbar;
