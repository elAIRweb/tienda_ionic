import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CarritoProvider } from './../../providers/carrito/carrito';
import { ProductoPage } from './../producto/producto';
import { ProductosProvider } from './../../providers/productos/productos';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    productoPage = ProductoPage;
    hayMas: boolean = true;

    constructor(public navCtrl: NavController, private _pp: ProductosProvider, private _cp: CarritoProvider) {

    }

    siguiente_pagina(infiniteScroll) {
        this._pp.cargar_todos()
            .then((existenMas: boolean) => {
                infiniteScroll.complete();
                this.hayMas = existenMas;
            })
    }

}
