import { httpService } from "./httpService";

export function getCategoriaDetalhe(id) {
  return httpService.get(`/${id}`);
}


