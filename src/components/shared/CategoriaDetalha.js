import React from "react";

import { toLongFormat } from '../../utils/date';


export default ({ categoriaDetalhe, handleCommand}) => {

  return (
    
    <>
        {categoriaDetalhe && (
            <div className="detalhes">
                <img src={categoriaDetalhe.icon_url} />
                <h3>{categoriaDetalhe.categories[0]}</h3>
                <p>{categoriaDetalhe.value}</p>
                <p> Created: <span>{toLongFormat(categoriaDetalhe.created_at)}</span> || Updated: <span>{toLongFormat(categoriaDetalhe.updated_at)}</span></p>
            </div>
        )}
    </>
  );
};
