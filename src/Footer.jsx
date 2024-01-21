import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: (i)=>( {
      opacity: 1,
      x: 100,
      transition: { delay:i * 0.3 },
    }),
    hidden: { opacity: 0 },
  };

  const items = ["2024 © Todos os direitos reservados"];

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item,i) => (
          <motion.li variants={variants} key={item} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Footer;
