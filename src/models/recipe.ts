import { observable, computed } from 'mobx-angular';

export class Recipe {
    id: string;
    @observable name: string;
    @observable description: string;

    constructor() { }

}