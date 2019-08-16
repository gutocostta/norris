import React from "react";
//import Imagem from '../../utils/ImagemBase64';

import CarrosselCategorias from "../shared/CarrosselCategorias";
import CategoriaDetalha from "../shared/CategoriaDetalha";


export default ({ categorias, categoriaDetalhe, handleCommand }) => (
  <>
    <div className="home page-content">

      <div className="categorias">
        <CarrosselCategorias categorias={categorias} handleCommand={handleCommand} />
      </div>

      <div className="categoria-detalhe">
        <CategoriaDetalha categoriaDetalhe={categoriaDetalhe} />
      </div>

    </div>
  </>
);
