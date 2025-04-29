import { useState, lazy, Suspense, useRef } from "react";
import { ProductList } from "../components/ProductList";
import { SearchBar } from "../components/SearchBar";
import { SortSelect } from "../components/SortSelect";
import { Product } from "../types/Product";

const ProductForm = lazy(() => import("../components/ProductForm"));

export const ProductsPage = () => {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("nombre");

  const formRef = useRef<HTMLDivElement | null>(null);

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleFinishForm = () => {
    setEditingProduct(null);
    setShowForm(false);
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl text-center mb-8 text-gray-600">
        Gestión de Productos
      </h1>

      <div ref={formRef}>
        {showForm ? (
          <Suspense
            fallback={<div className="text-center">Cargando formulario...</div>}
          >
            <ProductForm
              editProduct={editingProduct!}
              onFinish={handleFinishForm}
            />
          </Suspense>
        ) : (
          <>
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
              >
                Crear Nuevo Producto
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
              <SearchBar value={search} onChange={setSearch} />
              <SortSelect value={sort} onChange={setSort} />
            </div>
          </>
        )}
      </div>

      <ProductList onEdit={handleEdit} search={search} sort={sort} />
    </div>
  );
};
