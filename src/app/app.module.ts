import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CarritoProvider, ProductosProvider, UsuarioProvider } from '../providers/index.providers';

//Pipes
import { ImagenPipe } from './../pipes/imagen/imagen';

//Paginas
import {
    ProductoPage,
    TabsPage,
    PorCategoriasPage,
    OrdenesPage,
    OrdenesDetallePage,
    LoginPage,
    CategoriasPage,
    CarritoPage
} from './../pages/index.paginas';

@NgModule({
    declarations: [
        MyApp,
        ImagenPipe,
        HomePage,
        ProductoPage,
        TabsPage,
        PorCategoriasPage,
        OrdenesPage,
        OrdenesDetallePage,
        LoginPage,
        CategoriasPage,
        CarritoPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ProductoPage,
        TabsPage,
        PorCategoriasPage,
        OrdenesPage,
        OrdenesDetallePage,
        LoginPage,
        CategoriasPage,
        CarritoPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        CarritoProvider,
        ProductosProvider,
        UsuarioProvider
    ]
})
export class AppModule { }
