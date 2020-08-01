import React from 'react';

import Menu from '../../components/Menu'
import Footer from '../../components/Footer';
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'

import DadosIniciais from '../../data/dados_iniciais.json'

function Home() {
  return (
    <div>
      <Menu></Menu>
      <BannerMain url="https://www.youtube.com/embed/60c4rMq-aH0?autoplay=0&mute=1"></BannerMain>
      {
        DadosIniciais.categorias.map(categoria => 
          <Carousel 
            ignoreFirstVideo
            category={categoria} />
        )
      }
      <Footer></Footer>
    </div>
  );
}

export default Home;
