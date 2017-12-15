import { observable, action, computed } from 'mobx-angular';
import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { UUID } from 'angular2-uuid';

@Injectable()
export class IngredientStore{
    @observable ingredients: Ingredient[] = [];

    @action addIngredient(ingredient: Ingredient){
        ingredient.id = UUID.UUID();
        this.ingredients.push(ingredient);
    }

    @action deleteIngredient(ingredient: Ingredient){
        let index = this.ingredients.findIndex(r => r.id == ingredient.id);
        this.ingredients.splice(index, 1);
    }
    
    @action updateIngredient(ingredient: Ingredient){
        let index = this.ingredients.findIndex(r => r.id == ingredient.id);
        this.ingredients[index] = ingredient;
    }

}