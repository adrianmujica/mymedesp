import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewRecipePage } from '../pages/new-recipe/new-recipe';
import { RecipeDetailsPage } from '../pages/recipe-details/recipe-details';


import { MobxAngularModule } from 'mobx-angular';  
import { RecipeStore } from '../stores/recipe.store';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewRecipePage,
    RecipeDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MobxAngularModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewRecipePage,
    RecipeDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RecipeStore
  ]
})
export class AppModule {}
