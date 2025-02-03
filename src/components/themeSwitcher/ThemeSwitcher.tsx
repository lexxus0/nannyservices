import { Menu, MenuItem, Button } from "@mui/material";
import { Palette } from "@mui/icons-material";
import { useAppDispatch } from "../../store/tools/hooks";
import { useState } from "react";
import { setTheme } from "../../store/state/theme/slice";

const ThemeSwitcher: React.FC = () => {
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (theme: "red" | "blue" | "brown") => {
    dispatch(setTheme(theme));
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="text"
        onClick={handleClick}
        startIcon={<Palette />}
        sx={{
          padding: "0",
          color: "white",
          "&:hover": { backgroundColor: "transparent" },
        }}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => handleClose("red")}>🔴</MenuItem>
        <MenuItem onClick={() => handleClose("blue")}>🔵</MenuItem>
        <MenuItem onClick={() => handleClose("brown")}>🟤</MenuItem>
      </Menu>
    </div>
  );
};

export default ThemeSwitcher;
