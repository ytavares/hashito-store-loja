import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const BoxHeader = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background: #20b2aa;
`;

export const MenuLink = styled(Button)`
  :hover {
    color: #CD5C5C;
    border: none;
    box-shadow: none;
    background-color: transparent;
  }
`;
