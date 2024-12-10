import Link from "next/link";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { NavigationComponentProps } from "@/types/navigation";
import { isEven } from "@/utils/is-even";
import { useHeaderContext } from "@/contexts/header-context";

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
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 overflow-scroll bg-hydw-blue">
          <DialogPrimitive.Content title="Navigation">
            <div className="flex w-full items-center justify-end p-11">
              <motion.button
                className={`heading5 relative z-50 uppercase text-white transition-colors duration-150 hover:text-hydw-yellow`}
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
            <nav className="wrapper absolute left-0 top-0 mt-0 flex h-screen w-full flex-col  items-center justify-center shortsml:mt-10 shortsml:h-[unset] shortmd:mt-6 shortmd:h-[unset] shortlg:mt-8 shortlg:h-[unset]">
              {navItems.map((item, index: number) => (
                <motion.div
                  className="inline-block h-[34px] overflow-hidden px-8 will-change-transform md:h-[51px] lg:h-[79.9px]"
                  key={item.id}
                  initial="initial"
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href={item.path} onClick={() => setMenuOpen(!menuOpen)}>
                    <motion.div
                      variants={navVariants}
                      className={`heading2 cursor-pointer text-center uppercase text-white no-underline`}
                    >
                      {item.title}
                    </motion.div>
                    <motion.div variants={navVariants}>
                      <div
                        className={`font-white heading2 skew-x-40 cursor-pointer text-center uppercase tracking-normal ${
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
