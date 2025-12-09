"use client";
import React, { useState, useContext, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";
import { Menu, X } from "lucide-react";

// --- Context ---
interface NavbarContextProps {
  isScrolled: boolean;
  isMobileOpen: boolean;
  setIsMobileOpen: (v: boolean) => void;
}

const NavbarContext = React.createContext<NavbarContextProps>({
  isScrolled: false,
  isMobileOpen: false,
  setIsMobileOpen: () => {},
});

// --- Main Navbar Component ---

export const Navbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Switch to "scrolled" mode after 50px
    if (latest > 50 && !isScrolled) setIsScrolled(true);
    if (latest <= 50 && isScrolled) setIsScrolled(false);
  });

  return (
    <NavbarContext.Provider
      value={{ isScrolled, isMobileOpen, setIsMobileOpen }}
    >
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] flex justify-center transition-all duration-300 pointer-events-none", // pointer-events-none to let clicks pass through sides
          className
        )}
      >
        <div className="w-full flex justify-center pt-0 md:pt-4">
          <motion.nav
            layout
            initial={{
              width: "100%",
              y: 0,
              borderRadius: 0,
              backgroundColor: "rgba(0,0,0,0)",
            }}
            animate={{
              width: isScrolled ? "min(90%, 850px)" : "100%", // Desktop: 850px pill, Mobile: 90%
              y: isScrolled ? 10 : 0,
              borderRadius: isScrolled ? "24px" : "0px",
              backgroundColor: isScrolled
                ? "rgba(9, 9, 11, 0.8)" // Zinc-950 with opacity
                : "rgba(0,0,0,0)",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
              mass: 0.5,
            }}
            className={cn(
              "pointer-events-auto relative flex items-center justify-between px-6 py-3 backdrop-blur-xl transition-all",
              isScrolled
                ? "shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10"
                : "border-b border-transparent md:border-transparent md:py-6" // Taller on top
            )}
          >
            {children}
          </motion.nav>
        </div>
      </motion.header>
    </NavbarContext.Provider>
  );
};

// --- Subcomponents ---

export const NavbarBrand = ({
  children,
  className,
  href = "#",
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) => {
  return (
    <a
      href={href}
      className={cn(
        "flex items-center gap-2 group focus:outline-none shrink-0",
        className
      )}
    >
      {children}
    </a>
  );
};

export const NavbarContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "hidden md:flex items-center gap-1 justify-center flex-1 px-8", // Center items
        className
      )}
    >
      {children}
    </div>
  );
};

export const NavbarItem = ({
  children,
  href,
  active,
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  active?: boolean;
  onClick?: () => void;
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full",
        active ? "text-white" : "text-zinc-400 hover:text-white"
      )}
    >
      <span className="relative z-10">{children}</span>
      {active && (
        <motion.div
          layoutId="navbar-active-pill"
          className="absolute inset-0 bg-white/10 rounded-full"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-200" />
    </a>
  );
};

export const NavbarAction = ({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) => {
  return (
    <button
      className={cn(
        "hidden md:inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 h-10 px-6 active:scale-95",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// --- Mobile ---

export const MobileMenuToggle = () => {
  const { isMobileOpen, setIsMobileOpen } = useContext(NavbarContext);
  return (
    <button
      onClick={() => setIsMobileOpen(!isMobileOpen)}
      className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors relative z-50 focus:outline-none rounded-full hover:bg-white/10"
    >
      {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
};

export const MobileMenu = ({
  children,
  items,
}: {
  children?: React.ReactNode;
  items: { name: string; link: string }[];
}) => {
  const { isMobileOpen, setIsMobileOpen } = useContext(NavbarContext);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileOpen]);

  return (
    <AnimatePresence>
      {isMobileOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          />

          {/* Menu */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 inset-x-0 z-50 bg-zinc-950 md:hidden border-b border-white/10"
          >
            <div className="flex flex-col p-6 pt-24 pb-8 h-[70vh] relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

              <nav className="flex flex-col gap-2 relative z-10 w-full">
                {items.map((item, idx) => (
                  <motion.a
                    key={item.name}
                    href={item.link}
                    onClick={() => setIsMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                  >
                    <span className="text-xl font-medium text-zinc-300 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <span className="text-zinc-600 group-hover:text-white transition-colors">
                      →
                    </span>
                  </motion.a>
                ))}

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6"
                >
                  {children}
                </motion.div>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
