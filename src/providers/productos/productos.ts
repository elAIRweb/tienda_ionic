import { URL_PROVIDERS } from './../../config/url.providers';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductosProvider {

    pagina: number = 0;
    productos: any[] = [];
    categorias: any[] = [];
    por_categoria: any[] = [];

    constructor(public http: Http) {
        //console.log('Hello ProductosProvider Provider');
        this.cargar_todos();
        this.cargar_categorias();
    }

    cargar_por_categoria(categoria: string) {
        let url = URL_PROVIDERS + "/productos/por_tipo/" + categoria;
        this.http.get(url)
            .map(resp => resp.json())
            .subscribe(data => {
                console.log(data.lineas);
                this.por_categoria = data.lineas;
            });
    }

    cargar_categorias() {
        let url = URL_PROVIDERS + "/lineas";
        this.http.get(url)
            .map(resp => resp.json())
            .subscribe(data => {
                if (data.error) {
                    //problemas
                } else {
                    this.categorias = data.lineas;
                    console.log(this.categorias);

                }

            });
    }

    cargar_todos() {

        let promesa = new Promise((resolve, reject) => {

            let url = URL_PROVIDERS + "/productos/todos/" + this.pagina;
            this.http.get(url)
                .map(resp => resp.json())
                .subscribe(data => {

                    if (data.error) {
                        //Aquí hay un problema

                    } else {
                        this.productos.push(...data.lineas);
                        this.pagina += 1;
                        if (data.lineas == 0) {
                            resolve(false);
                            return;
                        }

                    }
                    resolve(true);
                });

        });
        return promesa;

    }

    //metodo para segmentar el array y poder mostrarlo en varias conlumnas
    // no hace falta hacerlo por que lo hemos solucionado con el html
    /*private agrupar(arr: any, tamano: number) {
        let nuevoArray = [];
        for (let i = 0; i < arr.length; i += tamano) {

            nuevoArray.push(arr.slice(i, i + tamano));
        }
        console.log(nuevoArray);
        return nuevoArray;
    }*/

}
