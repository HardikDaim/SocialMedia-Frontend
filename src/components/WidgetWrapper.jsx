import { Box } from "@mui/material";
import { styled } from "@mui/system";

const WidgetWrapper = styled(Box)(({ theme }) => ({
  padding: "1.5rem 1.5rem 0.75rem 1.5rem",
  backgroundColor: "white",
  borderRadius: "0.75rem",
  boxShadow: "0px 0px 10px 4px rgba(0, 0, 0, 0.1)", // Add your desired box shadow here
}));

export default WidgetWrapper;
