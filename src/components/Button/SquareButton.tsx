import { motion } from "framer-motion"
import { PropsWithChildren } from "react"

type SquareButtonProps = PropsWithChildren & {

}

function SquareButton({children} : SquareButtonProps) {
    return <>
    <motion.div whileHover={{ scaleX: 1.05 }}
      whileTap={{ scaleX: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
     className="w-full h-full flex justify-center items-center flex-row bg-inherit">
        {children}
    </motion.div>
    </>
}

export default SquareButton