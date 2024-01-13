import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Meu objetivo é ajudar você a <br /> se livrar do estresse e melhorar a saúde.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/stone-lotus.jpg" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Tratamento</motion.b> exclusivo
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>para sua</motion.b> necessidade.
          </h1>
          <button>SAIBA MAIS</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Relaxamento</h2>
          <p>
            A massagem terapêutica ajuda a reduzir o estresse e a tensão muscular, proporcionando uma sensação geral de relaxamento e bem-estar.
          </p>
          <button>Saiba mais</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Liberação de Pontos</h2>
          <p>
            Esta técnica pode aliviar dores musculares e articulares, reduzir a dor de cabeça e promover a recuperação de lesões.
          </p>
          <button>Saiba mais</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Drenagem </h2>
          <p>
            Estimula a circulação sanguínea e linfática, melhorando a entrega de oxigênio e nutrientes aos músculos e órgãos.
          </p>
          <button>Saiba mais</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Fortalece o Sistema Imunológico</h2>
          <p>
            A massagem terapêutica pode aumentar a produção de glóbulos brancos e reforçar o sistema imunológico do corpo.
          </p>
          <button>Saiba mais</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
