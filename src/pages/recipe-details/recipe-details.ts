import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { Recipe } from '../../models/recipe';
import { NewRecipePage } from '../new-recipe/new-recipe';
import { RecipeStore } from '../../stores/recipe.store';

/**
 * Generated class for the RecipeDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe-details',
  templateUrl: 'recipe-details.html',
})
export class RecipeDetailsPage {

  recipe: Recipe;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public recipeStore: RecipeStore) {
  }

  ngOnInit(){
    this.recipe = this.navParams.get('recipe');
    console.log(this.recipe);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeDetailsPage');
  }

  edit(){
    let modal = this.modalCtrl.create(NewRecipePage, {newRecipe: false, recipe: this.recipe});
    modal.present();
  }

  delete(){
   this.recipeStore.deleteRecipe(this.recipe);
   this.navCtrl.pop(); 
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Delete recipe?',
      message: `Do you want to remove: ${this.recipe.name} ?`,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.delete();
          }
        }
      ]
    });
    confirm.present();
  }

}
