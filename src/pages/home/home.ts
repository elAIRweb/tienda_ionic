import { ProductoPage } from './../producto/producto';
import { ProductosProvider } from './../../providers/productos/productos';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    productoPage = ProductoPage;
    hayMas: boolean = true;

    constructor(public navCtrl: NavController, private _pp: ProductosProvider) {

    }

    siguiente_pagina(infiniteScroll) {
        this._pp.cargar_todos()
            .then((existenMas: boolean) => {
                infiniteScroll.complete();
                this.hayMas = existenMas;
            })
    }

}
