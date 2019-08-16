import { httpService } from "./httpService";


export function getCategorias() {
  return httpService.get(`/categories`);
}


export function getCategoriaDetalhe(id) {
  return httpService.get(`/random?category=${id}`);
}

