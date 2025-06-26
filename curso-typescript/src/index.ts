// Intersections
const productId: string | number | boolean = false;

enum Direction {
  Up = 1,
  Down = 2,
  Left = "Esquerda",
}

const direction = Direction.Left;

// Type Assertions
const productName: any = "Boné";
let itemId = productName as string;
