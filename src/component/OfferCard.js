import { Box, Modal, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";

const OfferCard = ({ title, id, description, Icon }) => {
  const [_id, setId] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setId("");
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
    setId(id);
    if (_id) {
      setMessage(description);
    }
  };
  useEffect(() => {
    setMessage(description)
  }, [id])
  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Main>
      <img src={description.image} />
      <h1>{title}</h1>
      <p onClick={handleOpen}>
        see more <AiOutlineArrowRight />
      </p>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
         <div className="icons" style={{borderRadius: "50%", 
          backgroundColor:"whitesmoke",
          width:"50px", height: "50px",
          padding: "40px",
          boxShadow: "1px 1px 1px black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}>
         <p><Icon className="icon"  style={{ color: "gray", transform: "scale(2)"}}/></p>
         </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {message.title1}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {message.title2}
          </Typography>
          {
            message?.list?.map((val, i) => (
            <ul>
                <li  style={{padding: "5px"}} key={i}>{val}</li>
            </ul>
            ))
          }
        </Box>
      </Modal>
    </Main>
  );
};

export default OfferCard;

const Main = styled.div`
  margin: 10px 10px;
  padding: 30px;
  color: black;
  box-shadow: 1px 1px 1px 1px #00000038;
  background-color: white;
  h1 {
    font-size: 30px;
    margin-bottom: 30px;
    font-weight: 200;
    font-family: "Courier New", Courier, monospace;

    @media (max-width: 400px) {
      font-size: 25px;
    }
  }
  p {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  img{
    max-width: 130px;
    height: 130px;
  }
  li {
    margin: 40px
  }
  .icon {
    transform: scale(4);
    background-color: blue;
  }
`;
