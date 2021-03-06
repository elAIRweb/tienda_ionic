import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from './../../providers/productos/productos';
import { ProductoPage } from './../producto/producto';


@Component({
    selector: 'page-por-categorias',
    templateUrl: 'por-categorias.html',
})
export class PorCategoriasPage {

    categoria: any = {};
    productoPage = ProductoPage;

    constructor(public navCtrl: NavController, public navParams: NavParams, private _pp: ProductosProvider) {
        this.categoria = this.navParams.get("categoria");
        this._pp.cargar_por_categoria(this.categoria.id);
    }

}
