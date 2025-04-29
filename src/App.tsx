import { ProductsPage } from "./pages/ProductsPage";
import { ProductProvider } from "./context/ProductContext";

const App = () => {
  return (
    <ProductProvider>
      <ProductsPage />
    </ProductProvider>
  );
};

export default App;
