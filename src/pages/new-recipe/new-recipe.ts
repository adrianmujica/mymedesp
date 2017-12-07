import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Recipe } from '../../models/recipe';  
import { RecipeStore } from '../../stores/recipe.store';

@IonicPage()
@Component({
  selector: 'page-new-recipe',
  templateUrl: 'new-recipe.html',
})
export class NewRecipePage {

  public recipe = new Recipe();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,    
    public store: RecipeStore) {
  }

  ionViewDidLoad() {
  }

  save() {
    this.store.addRecipe(this.recipe);
    console.log(this.recipe.name);
    this.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
