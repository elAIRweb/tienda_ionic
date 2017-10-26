import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductosProvider } from './../../providers/productos/productos';
import { PorCategoriasPage } from './../por-categorias/por-categorias';

@Component({
    selector: 'page-categorias',
    templateUrl: 'categorias.html',
})
export class CategoriasPage {

    porCategoria = PorCategoriasPage;

    constructor(public navCtrl: NavController, public navParams: NavParams, private _pp: ProductosProvider) {
    }



}
