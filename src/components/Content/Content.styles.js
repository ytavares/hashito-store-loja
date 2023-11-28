import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const BoxContent = styled(Box)`
`;

export const BoxItem = styled(Box)`
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  border: 1px solid grey;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  svg {
    font-size: 80px;
    color: #ffa9a1;
  }
`;

export const BoxContact = styled(Box)`
  width: 100%;
  height: 90px;
`;

export const BoxImage = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentContact = styled(Box)`
  height: 100vh;
  display: flex;
  align-items: center;
  background: radial-gradient(circle, rgba(255,169,161,1) 0%, rgba(255,161,161,1) 35%, rgba(255,192,161,0.8547794117647058) 100%);
`;