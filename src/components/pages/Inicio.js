// src/components/Inicio.js
import React from "react";
import FixedNav from "../sections/FixedNav";
import HeroSection from "../sections/HeroSection";
import ImageGallery from "../sections/ImageGallery";
import CarouselEmpresas from "../sections/CarouselEmpresas";
import Destacados from "../sections/Destacados";
import ScrollAppear from '../common/ScrollAppear';


function Inicio() {
  return (
    <div>
      <FixedNav />
      <HeroSection />
      <ScrollAppear>
        <div className="pt-[130px] bg-gray-100"></div>
        <ImageGallery />
      </ScrollAppear>
      <ScrollAppear>
        <Destacados />
      </ScrollAppear>
      <ScrollAppear>
        <CarouselEmpresas />
      </ScrollAppear>
    </div>
  );
}

export default Inicio;
