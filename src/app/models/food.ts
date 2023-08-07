export interface Food {
    id: number;
    title: string;
    description?: string; // ? veut-dire que ce n'est pas obligatoire
    price: number;
}
