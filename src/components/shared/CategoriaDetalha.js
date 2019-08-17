import React from "react";

import { Grid } from "react-flexbox-grid";
import Loader from "../shared/Loader";

import { toLongFormat } from '../../utils/date';


export default ({ categoriaDetalhe, categoriaDetalheLoading, handleCommand}) => {


  if (categoriaDetalheLoading) {
    return (
      <Grid className="loading">
        <div className="loader-container">
          <Loader loading={true} className="loader" />
        </div>
      </Grid>
    );
  }

  return (
    
    <>
        {categoriaDetalhe && (
            <div className="detalhes">
                <div className="detalhes-info">
                    <h3>{categoriaDetalhe.categories[0]}</h3>
                    <img src={categoriaDetalhe.icon_url} alt="Chuck!!!" />
                    <p className="text">{categoriaDetalhe.value}</p>
                    <p className="date"> Created: <span>{toLongFormat(categoriaDetalhe.created_at)}</span> || Updated: <span>{toLongFormat(categoriaDetalhe.updated_at)}</span></p>
                </div>
            </div>
        )}
    </>
  );
};
