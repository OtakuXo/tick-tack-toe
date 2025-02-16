import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function StartBtn(props) {
  const navigate = useNavigate();

  return <Button onClick={() => navigate("/board")}>Start</Button>;
}

export default StartBtn;
