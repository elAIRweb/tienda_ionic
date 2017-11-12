import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AlertController, Platform, ModalController } from "ionic-angular";

import { Storage } from '@ionic/storage';

import { UsuarioProvider } from './../usuario/usuario';

//paginas del modal
import { CarritoPage } from './../../pages/carrito/carrito';
import { LoginPage } from './../../pages/login/login';


@Injectable()
export class CarritoProvider {

    items: any[] = [];

    constructor(public http: Http, private alertCtrl: AlertController, private platform: Platform, private storage: Storage, private _up: UsuarioProvider, private modalCtrl: ModalController) {
        this.cargar_storage();
    }

    ver_carrito() {

        let modal: any;

        if (this._up.token) {
            //mostrar pagina del carrito
            modal = this.modalCtrl.create(CarritoPage);
        } else {
            //mostrar el login
            modal = this.modalCtrl.create(LoginPage);
        }

        modal.present();

        modal.onDidDismiss((abrirCarrito: boolean) => {
            if (abrirCarrito) {
                this.modalCtrl.create(CarritoPage).present();
            }
        });
    }

    agregar_carrito(item_enviado: any) {
        for (let item of this.items) {
            if (item.codigo == item_enviado.codigo) {
                this.alertCtrl.create({
                    title: "Ya existe",
                    subTitle: item_enviado.producto + " ya está agregado al carrito de compras",
                    buttons: ["OK"]
                }).present();
                return;
            }
        }

        this.items.push(item_enviado);
        this.guardar_storage();
    }

    private guardar_storage() {
        if (this.platform.is("cordova")) {
            //Estamos en el dispositivo
            this.storage.set("items", this.items);

        } else {
            //Estamos en el pc
            localStorage.setItem("items", JSON.stringify(this.items));

        }

    }

    cargar_storage() {
        //Creamos una promesa para poder hacer algo despues de que cargue "algo" el storage

        let promesa = new Promise((resolve, reject) => {
            if (this.platform.is("cordova")) {
                //Estamos en el dispositivo

                this.storage.ready()
                    .then(() => {
                        this.storage.get("items")
                            .then(items => {
                                if (items) {
                                    this.items = items;
                                }
                                resolve();
                            })
                    });

            } else {
                //Estamos en el pc
                if (localStorage.getItem("items")) {
                    //Existe items en el localstorage
                    this.items = JSON.parse(localStorage.getItem("items"));
                }

                resolve();
            }
        });
        return promesa;

    }

}
