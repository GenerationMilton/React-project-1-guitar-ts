export type Guitar = {
    id : number;
    name: string
    image: string;
    description: string;
    price: number;
}

//utility types
export type CartItem = Pick<Guitar, 'id' | 'name' | 'price' | 'image' | 'description' > & {
    quantity: number
}



