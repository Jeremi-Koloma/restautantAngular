import { Injectable } from '@angular/core';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class QuickyLunchService {

  // un tableau de Burgers typer en Food
  burgers: Food[] = [
    { id: 1, title: "Humburger", description: "composé d'un steak haché, de deux pains ronds appelés « buns », de crudités (salade, tomate, oignons, cornichons) et d'une sauce ketchup, mayo ou burger", price: 5000 },
    { id: 2, title: "Cheeseburger", description: "composé d'un steak haché, de deux pains ronds appelés « buns », de crudités (salade, tomate, oignons, cornichons) et d'une sauce ketchup, mayo ou burger", price: 4800 },
    { id: 3, title: "Burger du moment", description: "composé d'un steak haché, de deux pains ronds appelés « buns », de crudités (salade, tomate, oignons, cornichons) et d'une sauce ketchup, mayo ou burger", price: 3000 },
  ];

  // un tableau de Pizza typer en Food
  pizzas: Food[] = [
    { id: 1, title: "Marguerite", description: " base (coulis de tomates, crème fraiche, ou huile d'olive) puis la mozzarella (de vache) ou du provolone, et ensuite les autres ingrédients.", price: 7500 },
    { id: 2, title: "Reine", description: " base (coulis de tomates, crème fraiche, ou huile d'olive) puis la mozzarella (de vache) ou du provolone, et ensuite les autres ingrédients.", price: 8000 },
    { id: 3, title: "Royale", description: " base (coulis de tomates, crème fraiche, ou huile d'olive) puis la mozzarella (de vache) ou du provolone, et ensuite les autres ingrédients.", price: 22000 },
    { id: 1, title: "Verde", description: " base (coulis de tomates, crème fraiche, ou huile d'olive) puis la mozzarella (de vache) ou du provolone, et ensuite les autres ingrédients.", price: 10000 },
  ];

  // un tableau de Galette typer en Food
  galettes: Food[] = [
    { id: 1, title: "Formule complète", description: "farine de blé 66%, sucre, beurre 18%, œufs de poules élevées en plein air 2,6%, arôme naturel, sel, poudres à lever : carbonates d'ammonium et de sodium, lait écrémé en poudre", price: 800 },
    { id: 1, title: "Formule du jour", description: "farine de blé 66%, sucre, beurre 18%, œufs de poules élevées en plein air 2,6%, arôme naturel, sel, poudres à lever : carbonates d'ammonium et de sodium, lait écrémé en poudre", price: 2500 },
  ];

  constructor() { }

  // Récuperons la liste des burgers
  getBurgers() {
    this.burgers;
  }

  // Récuperons la liste de pizza
  getPizzas() {
    this.pizzas;
  }

  // Récupérons la liste de galette
  getGalettes() {
    this.galettes;
  }


}
