import { URL_IMAGENES } from './../../config/url.providers';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'imagen',
})
export class ImagenPipe implements PipeTransform {

    transform(codigo: string) {
        return URL_IMAGENES + codigo + ".jpg";
    }
}
