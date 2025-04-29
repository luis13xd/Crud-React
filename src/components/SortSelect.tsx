interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SortSelect = ({ value, onChange }: Props) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-12 p-2 border rounded-md mb-6 shadow-sm focus:ring focus:ring-blue-300"
    >
      <option value="nombre">Ordenar por Nombre</option>
      <option value="codigo">Ordenar por Código</option>
      <option value="cantidad">Ordenar por Cantidad</option>
      <option value="creacion">Ordenar por Fecha de Creación</option>
    </select>
  );
};
