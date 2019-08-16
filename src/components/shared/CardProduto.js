import React from "react";
import { Link } from "react-router-dom";

import ImagemProduto from "../shared/ImagemProdutoClasse";

export default ({ produto }) => (
  <div className="card-produto">
    <Link to={`/produto/${produto.id}`}>
      <div className="card-produto-header"></div>
      <div className="card-produto-body">
        <div className="img-produto">
          <ImagemProduto>
            <img src={produto.urlImagemPreview} alt={produto.titulo} />
          </ImagemProduto>
        </div>
        <div className="desc-produto">
          <p className="seguimento">{produto.segmento}</p>
          <p className="descricao">{produto.titulo}</p>
        </div>
      </div>
      <div className="card-produto-footer">
        <p className="preco">{`R$ ${produto.preco}`}</p>
      </div>
    </Link>
  </div>
);
