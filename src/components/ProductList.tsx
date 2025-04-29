import { useProductContext } from "../context/ProductContext";
import { ProductItem } from "./ProductItem";
import { Product } from "../types/Product";

interface Props {
  onEdit: (product: Product) => void;
  search: string;
  sort: string;
}

export const ProductList = ({ onEdit, search, sort }: Props) => {
  const { products, deleteProduct } = useProductContext();

  const filteredProducts = products
    .filter((p) => p.nombre.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      switch (sort) {
        case "cantidad":
          return b.cantidad - a.cantidad;
        case "codigo":
          return a.codigo - b.codigo;
        case "creacion":
          return (
            new Date(b.creacion).getTime() - new Date(a.creacion).getTime()
          );
        default:
          return a.nombre.localeCompare(b.nombre);
      }
    });

  if (filteredProducts.length === 0) {
    return <p className="text-center text-gray-500">No hay productos</p>;
  }

  return (
    <div className="space-y-4">
      {filteredProducts.map((product) => (
        <ProductItem
          key={product.codigo}
          product={product}
          onEdit={onEdit}
          onDelete={deleteProduct}
        />
      ))}
    </div>
  );
};
