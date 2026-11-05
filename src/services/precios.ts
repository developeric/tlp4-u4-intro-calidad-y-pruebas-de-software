/** Calcula el precio luego de aplicar un porcentaje de descuento. */
export function calcularPrecioFinal(precio: number, descuento: number): number {
  if (!Number.isFinite(precio) || precio < 0) {
    throw new RangeError("El precio tiene que ser Finito o Mayor a 0");
  }
  if (!Number.isFinite(descuento) || descuento < 0 || descuento >= 100) {
    throw new RangeError("El descuento tiene que ser mayor a 0 y menor a 100")
  }

  return precio - (precio * descuento) / 100;
}
