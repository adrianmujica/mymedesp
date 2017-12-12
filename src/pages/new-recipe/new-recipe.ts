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
  public newRecipe: boolean;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,    
    public store: RecipeStore) {
  }

  ionViewDidLoad() {
    this.newRecipe = this.navParams.get("newRecipe");
    this.recipe = (this.newRecipe) ? new Recipe() : this.navParams.get("recipe");
  }

  save() {
    if(this.newRecipe)
      this.store.addRecipe(this.recipe);
    else
      this.store.updateRecipe(this.recipe);
    this.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
