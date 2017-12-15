import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { Recipe } from '../../models/recipe';
import {RecipeStore } from '../../stores/recipe.store';
import { NewRecipePage } from '../new-recipe/new-recipe';
import { RecipeDetailsPage } from '../recipe-details/recipe-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

  constructor(public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public store: RecipeStore) {
      console.log("recipes: ", this.store.recipes.length);

  }

  addRecipe(){
    let modal = this.modalCtrl.create(NewRecipePage, {newRecipe: true});
    modal.present();
  }

  recipeDetails(recipe){
    this.navCtrl.push(RecipeDetailsPage, {recipe: recipe});
  }

}
