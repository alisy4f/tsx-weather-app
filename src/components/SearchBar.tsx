import { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';

// Definisi properti yang akan diterima oleh komponen SearchBar
interface SearchBarProps {
  location: string;
  handleLocationChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
  handleButtonClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

// Komponen input untuk lokasi dan tombol pencarian
const SearchBar: React.FC<SearchBarProps> = ({ location, handleLocationChange, handleKeyPress, handleButtonClick }) => {
  return (
    <div className="search">
      <input
        value={location}
        onChange={handleLocationChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter Location"
        type="text"
      />
      <button onClick={handleButtonClick}>Search</button>
    </div>
  );
};

export default SearchBar;
