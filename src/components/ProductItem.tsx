import { Product } from "../types/Product";

interface Props {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (codigo: number) => void;
}

export const ProductItem = ({ product, onEdit, onDelete }: Props) => {
  return (
    <div className="border p-4 bg-white hover:bg-gray-100 rounded flex justify-between items-center">
      <div>
        <p>Codigo: {product.codigo}</p>
        <h3>Nombre: {product.nombre}</h3>
        <p>Descripcion: {product.descripcion}</p>
        <p>Cantidad: {product.cantidad}</p>
        <p className="text-sm text-gray-500">
          Creado el {new Date(product.creacion).toLocaleString()}
        </p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onEdit(product)}
          className="bg-yellow-400 hover:bg-yellow-600 text-white px-3 py-1 rounded"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(product.codigo)}
          className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
