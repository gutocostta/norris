import { httpService } from './httpService';

export function getUsuario() {
    return httpService.get('/userInfo');
}