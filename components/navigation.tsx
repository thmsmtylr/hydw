import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { NavigationComponentProps } from "@/types/navigation";
import { isEven } from "@/utils/is-even";
import { flyerFont } from "@/fonts";
import { useHeaderContext } from "@/contexts/header-context";
import { useFollowPointer } from "@/hooks/use-follow-pointer";
import { useRef } from "react";

const navVariants = {
  initial: {
    translateY: "0%",
  },
  hover: {
    type: "spring",
    translateY: "-100%",
  },
};

export function Navigation(props: NavigationComponentProps) {
  const { navItems } = props;
  const { menuOpen, setMenuOpen, onOpenChange } = useHeaderContext();
  const menuRef = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(menuRef);

  if (menuOpen) {
    return (
      <DialogPrimitive.Root open={menuOpen} onOpenChange={onOpenChange}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-hydw-blue">
            <DialogPrimitive.Content>
              <motion.div
                ref={menuRef}
                animate={{ x, y }}
                transition={{ type: "tween" }}
                whileTap={{ scale: 0.9 }}
                className="flex h-40 w-full items-center justify-end px-11"
              >
                <button
                  className={`text-2xl uppercase leading-[115%] tracking-wide text-white/40 transition-colors duration-100 hover:text-white ${flyerFont.className}`}
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="menu"
                  aria-haspopup="menu"
                  aria-expanded={menuOpen}
                >
                  Close
                </button>
              </motion.div>
              <nav className="-mt-40 flex h-screen flex-col items-center justify-center">
                {navItems.map((item, index: number) => (
                  <motion.a
                    className="inline-block h-[5.2rem] overflow-hidden px-8 will-change-transform"
                    href="#"
                    key={item.id}
                    initial="initial"
                    whileHover="hover"
                  >
                    <motion.div
                      variants={navVariants}
                      className={`text-center text-8xl font-black uppercase tracking-normal text-white ${flyerFont.className}`}
                    >
                      {item.title}
                    </motion.div>
                    <motion.div variants={navVariants}>
                      <div
                        className={`skew-x-40 text-center text-8xl font-black uppercase tracking-normal ${
                          isEven(index) ? "text-hydw-yellow" : "text-hydw-pink"
                        } ${flyerFont.className}`}
                      >
                        {item.title}
                      </div>
                    </motion.div>
                  </motion.a>
                ))}
              </nav>
            </DialogPrimitive.Content>
          </DialogPrimitive.Overlay>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    );
  }

  return null;
}
