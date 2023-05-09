import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

const Portal = ({ children }) => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#modal-root");
    setMounted(true);
  }, []);
  return mounted && ref.current ? createPortal(children, ref.current) : null;
};

export default function Modal({
  children,
  isOpenModal = false,
  setIsOpenModal,
  blur,
  right,
}) {

  useEffect(() => {
    const body = document.body;

    isOpenModal
      ? body.classList.add("overflow-hidden")
      : body.classList.remove("overflow-hidden");


  }, [isOpenModal]);


  return (
    <>
    <Portal className="lg:hidden black">
      <AnimatePresence>
        {isOpenModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`h-full w-full  fixed left-0 top-0 z-[200] ${
              blur ? "backdrop-blur-[6px]" : ""
            } bg-black/60 `}
          >
            <motion.div
              className={`w-screen absolute h-full ${
                right ? "right-0" : "left-0"
              }  bg-base-100`}
              initial={right ? { y: "100%" } : { y: "-100%" }}
              animate={
                
                right ? { y: 0 } : { y: 0 }

              }
              transition={{ duration: 1, ease: "easeInOut" }}
                exit={
                    right ? { y: "100%" } : { y: "-100%" }

                }
            >
              
              {children}
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
 </>   
  );
}