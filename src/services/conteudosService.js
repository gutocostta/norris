import { httpService } from "./httpService";


export function getCateorias() {
  return httpService.get(`/categorias`);
}


export function getCategoriaDetalhe(id) {
  return httpService.get(`/${id}`);
}

