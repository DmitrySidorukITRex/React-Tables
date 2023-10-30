import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface ThemeModeSelectProps {
  currentColorMode: string;
  changeThemeMode: (value: string) => void;
}

const ThemeModeSelect: React.FC<ThemeModeSelectProps> = ({ currentColorMode, changeThemeMode }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Theme preferences</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={currentColorMode}
        label="Age"
        onChange={(e) => changeThemeMode(e.target.value)}>
        <MenuItem value="light">Light Mode</MenuItem>
        <MenuItem value="dark">Dark Mode</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ThemeModeSelect;
