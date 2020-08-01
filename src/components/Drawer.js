import React from "react";
import Drawer from "@material-ui/core/Drawer";
import {Button} from 'react-bootstrap'
const DraweR = (props) => {
  return (
    <div>
      <Drawer anchor="right" open={props.open} onClose={props.close()}>
        <div
          style={{
            width: 550,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {props.children}
          <Button style={{ marginTop: "5%",marginBottom:"5%" }}>Check Out</Button>
        </div>
      </Drawer>
    </div>
  );
};

export default DraweR;
