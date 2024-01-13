import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Ventosa Terapia",
    img: "/ventosa-corpo-inteiro-1024x768px-2.png",
    desc: "A ventosa terapia é uma prática terapêutica que envolve a aplicação de copos de vidro, plástico ou silicone na pele, criando vácuo para estimular o fluxo sanguíneo e aliviar a tensão muscular. A sucção resultante pode aliviar dores musculares, promover o relaxamento e melhorar a circulação sanguínea. ",
  },
  {
    id: 2,
    title: "Massagem Relaxante",
    img: "/massagem-relaxante-1024x768px-2.png",
    desc: "A massagem relaxante oferece uma série de benefícios, incluindo o alívio do estresse e da ansiedade, redução da tensão muscular, melhoria da circulação sanguínea, aumento da flexibilidade e promoção do relaxamento geral. Ela é frequentemente usada para melhorar o bem-estar físico e emocional, aliviando a tensão e promovendo um estado de tranquilidade.",
  },
  {
    id: 3,
    title: "Limpeza de Pele",
    img: "/limpeza-de-pele-1024x768px.png",
    desc: "A limpeza de pele no corpo é uma técnica estética que oferece diversos benefícios, incluindo a remoção de células mortas e impurezas, desobstrução dos poros, prevenção de acne e cravos, melhoria da textura da pele, estímulo à renovação celular e hidratação profunda. Ela promove uma pele mais saudável, suave e revitalizada, ajudando a combater problemas comuns da pele e a manter sua aparência radiante.",
  },
  {
    id: 4,
    title: "Drenagem Linfática",
    img: "/drenagem-linfatica-1024x768px.png",
    desc: "A drenagem linfática é uma técnica de massagem suave que proporciona uma série de benefícios, incluindo a redução do inchaço e retenção de líquidos, estimulação do sistema linfático para eliminar toxinas, melhoria da circulação sanguínea, alívio da sensação de pernas cansadas e relaxamento. Ela é frequentemente utilizada para melhorar a saúde geral, auxiliar na recuperação pós-operatória e aprimorar a textura da pele, contribuindo para uma sensação de bem-estar e vitalidade.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Saiba mais</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Serviços Prestados</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
