import React from "react";
//import Imagem from '../../utils/ImagemBase64';

import CarrosselCategorias from "../shared/CarrosselCategorias";
import CategoriaDetalha from "../shared/CategoriaDetalha";


export default ({ categorias, categoriaDetalhe, categoriaDetalheLoading, handleCommand }) => (
  <>
    <div className="home page-content">

      <div className="categorias">
        <CarrosselCategorias categorias={categorias} handleCommand={handleCommand} />
      </div>

      <div className="categorias-detalhe">
        <CategoriaDetalha categoriaDetalhe={categoriaDetalhe} categoriaDetalheLoading={categoriaDetalheLoading} />
      </div>

    </div>
  </>
);
