interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: Props) => {
  return (
    <input
      type="text"
      placeholder="Buscar por nombre..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-12 p-2 border rounded-md mb-4 shadow-sm focus:ring focus:ring-blue-300"
    />
  );
};
