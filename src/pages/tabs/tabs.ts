import { OrdenesPage } from './../ordenes/ordenes';
import { CategoriasPage } from './../categorias/categorias';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',
})
export class TabsPage {

    tab1 = HomePage;
    tab2 = CategoriasPage;
    tab3 = OrdenesPage;


}
