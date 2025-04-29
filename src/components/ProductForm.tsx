import { useState } from "react";
import { Product } from "../types/Product";
import { useProductContext } from "../context/ProductContext";

interface Props {
  editProduct?: Product;
  onFinish: () => void;
}

const ProductForm = ({ editProduct, onFinish }: Props) => {
  const { addProduct, updateProduct } = useProductContext();

  const [form, setForm] = useState({
    codigo: editProduct?.codigo || Math.floor(Math.random() * 100000),
    nombre: editProduct?.nombre || "",
    descripcion: editProduct?.descripcion || "",
    cantidad: editProduct?.cantidad?.toString() || "", // usar string
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cantidadParsed = Number(form.cantidad);
    if (isNaN(cantidadParsed) || cantidadParsed < 1) {
      alert("La cantidad debe ser un número mayor que 0.");
      return;
    }

    const finalProduct: Product = {
      codigo: Number(form.codigo),
      nombre: form.nombre,
      descripcion: form.descripcion,
      cantidad: cantidadParsed,
      creacion: editProduct?.creacion || new Date().toISOString(),
    };

    if (editProduct) {
      updateProduct(finalProduct);
    } else {
      addProduct(finalProduct);
    }

    onFinish();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white shadow p-6 rounded-md mb-2"
    >
      <div>
        <label className="block text-gray-700 mb-1">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Descripción</label>
        <textarea
          name="descripcion"
          value={form.descripcion}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        ></textarea>
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Cantidad</label>
        <input
          type="number"
          name="cantidad"
          value={form.cantidad}
          onChange={handleChange}
          required
          min={1}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
      >
        {editProduct ? "Actualizar Producto" : "Crear Producto"}
      </button>

      <button
        type="button"
        onClick={onFinish}
        className="w-full mt-2 bg-red-400 hover:bg-red-600 text-white py-2 rounded-md"
      >
        Cancelar
      </button>
    </form>
  );
};

export default ProductForm;
