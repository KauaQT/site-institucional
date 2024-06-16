import React from "react";
import styles from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img1 from "../../../utils/assets/imgSlide1.svg";
import img2 from "../../../utils/assets/imgSlide2.svg";
import img3 from "../../../utils/assets/imgSlide3.svg";
import img4 from "../../../utils/assets/imgSlide4.svg";
import img5 from "../../../utils/assets/imgSlide5.svg";

const Slider = () => {
  return (
    <>
      <div className={styles["container"]}>
        <h2 className={styles["titulo"]}>No CarOna ...</h2>

        <Swiper
          className={styles["carrossel"]}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide className={styles["slide"]}>
            <img src={img1} alt="Imagem 1" />
            <h4>
              Você oferece ou reserva carona de uma maneira simples e segura
            </h4>
          </SwiperSlide>
          <SwiperSlide className={styles["slide"]}>
            <img src={img2} alt="Imagem 2" />
            <h4>
              Você realiza pagamentos sem dor de cabeça e conta com Seguro
              CaRona para sua segurança
            </h4>
          </SwiperSlide>
          <SwiperSlide className={styles["slide"]}>
            <img src={img3} alt="Imagem 3" />
            <h4>
              Você avalia o motorista ou passageiro e contribui com a comunidade
              CaRona
            </h4>
          </SwiperSlide>
          <SwiperSlide className={styles["slide"]}>
            <img src={img4} alt="Imagem 4" />
            <h4>
              As mulheres viajam com mais segurança, selecionando a opção de
              viajar apenas com mulheres
            </h4>
          </SwiperSlide>
          <SwiperSlide className={styles["slide"]}>
            <img src={img5} alt="Imagem 5" />
            <h4>
              Você pode ter sua carona reservada automaticamente, se tornando um
              passageiro fiel
            </h4>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
