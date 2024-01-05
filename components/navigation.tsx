import Link from "next/link";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { NavigationComponentProps } from "@/types/navigation";
import { isEven } from "@/utils/is-even";
import { useHeaderContext } from "@/contexts/header-context";
import { flyerFont } from "@/fonts";

const navVariants = {
  initial: {
    translateY: "0%",
  },
  hover: {
    translateY: "-100%",
  },
};

export function Navigation(props: NavigationComponentProps) {
  const { navItems } = props;
  const { menuOpen, setMenuOpen, onOpenChange } = useHeaderContext();

  return (
    <DialogPrimitive.Root open={menuOpen} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-hydw-blue">
          <DialogPrimitive.Content>
            <div className="flex min-h-[134.85px] w-full items-center justify-end p-11">
              <motion.button
                className={`text-2xl uppercase leading-[115%] tracking-wide text-white/40 transition-colors duration-100 hover:text-white ${flyerFont.className}`}
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="menu"
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                whileTap={{ scale: 0.9 }}
              >
                Close
              </motion.button>
            </div>
            <nav className="-mt-40 flex h-screen flex-col items-center justify-center">
              {navItems.map((item, index: number) => (
                <motion.div
                  className="inline-block h-[5.2rem] overflow-hidden px-8 will-change-transform"
                  key={item.id}
                  initial="initial"
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href={item.path} onClick={() => setMenuOpen(!menuOpen)}>
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
                  </Link>
                </motion.div>
              ))}
            </nav>
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
