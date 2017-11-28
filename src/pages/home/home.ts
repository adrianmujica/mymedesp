import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Recipe } from '../../models/recipe';
import {RecipeStore } from '../../stores/recipe.store';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

  constructor(public navCtrl: NavController, public store: RecipeStore) {

  }

  addRecipe(){
    let recipe = new Recipe();
    recipe.name = "receta1";
    recipe.description = "QWERTY";
    this.store.addRecipe(recipe);
  }

}
