import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AlertController, Platform } from "ionic-angular";

import { Storage } from '@ionic/storage';

@Injectable()
export class CarritoProvider {

    items: any[] = [];

    constructor(public http: Http, private alertCtrl: AlertController, private platform: Platform, private storage: Storage) {
        this.cargar_storage();
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
