import React from "react";
import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { MultipleChoiceOption } from "../question_types";

interface MultipleChoiceListProps {
  options: MultipleChoiceOption[];
  onSelect: (selectedIndex: number) => void;
  selected: number | number[] | null;
}

const MultipleChoiceList: React.FC<MultipleChoiceListProps> = ({
  options,
  onSelect,
  selected,
}) => {
  const isSelected = (index: number) => {
    if (Array.isArray(selected)) {
      return selected.includes(index);
    }

    return index === selected;
  };

  return (
    <List sx={{ width: "100%" }}>
      {options.map((value, i) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} disablePadding>
            <ListItemButton
              role={undefined}
              onClick={() => onSelect(i)}
              sx={{ width: "100%" }}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={isSelected(i)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default MultipleChoiceList;
