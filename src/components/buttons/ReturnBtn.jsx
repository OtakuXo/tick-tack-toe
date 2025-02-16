import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ReturnBtn(props) {
  const navigate = useNavigate();

  return <Button onClick={() => navigate("/")}>Return</Button>;
}

export default ReturnBtn;
