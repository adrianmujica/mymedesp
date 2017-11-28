import { observable, action, computed } from 'mobx-angular';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
import { UUID } from 'angular2-uuid';

@Injectable()
export class RecipeStore{
    @observable recipes: Recipe[] = [];

    @action addRecipe(recipe: Recipe){
        recipe.id = UUID.UUID();
        this.recipes.push(recipe);
    }

    @action deleteRecipe(recipe: Recipe){
        let index = this.recipes.findIndex(r => r.id == recipe.id);
        this.recipes.splice(index, 1);
    }
    
    @action updateRecipe(recipe: Recipe){
        let index = this.recipes.findIndex(r => r.id == recipe.id);
        this.recipes[index] = recipe;
    }

}