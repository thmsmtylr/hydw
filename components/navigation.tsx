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
            <div className="flex w-full items-center justify-end p-11">
              <motion.button
                className={`heading5 uppercase text-white transition-colors duration-150 hover:text-hydw-yellow relative z-50`}
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="menu"
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                whileTap={{ scale: 1 }}
              >
                Close
              </motion.button>
            </div>
            <nav className="wrapper absolute top-0 left-0 flex w-full h-screen flex-col items-center justify-center">
              {navItems.map((item, index: number) => (
                <motion.div
                  className="inline-block h-[51px] lg:h-[79.9px] overflow-hidden px-8 will-change-transform"
                  key={item.id}
                  initial="initial"
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href={item.path} onClick={() => setMenuOpen(!menuOpen)}>
                    <motion.div
                      variants={navVariants}
                      className={`text-center heading2 text-white no-underline uppercase`}
                    >
                      {item.title}
                    </motion.div>
                    <motion.div variants={navVariants}>
                      <div
                        className={`skew-x-40 text-center heading2 font-white uppercase tracking-normal ${
                          isEven(index) ? "text-hydw-yellow" : "text-hydw-pink"
                        }`}
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
