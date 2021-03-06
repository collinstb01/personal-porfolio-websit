import { useEffect } from "react";
import styled from "styled-components";
import Title from "../component/Title";
import ExperienceCard from "../component/ExperienceCard";
import { useDispatch, useSelector } from "react-redux";

const Experience = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.skill);

  useEffect(() => {
    // dispatch(FetchSkills(message));
  }, [dispatch]);
  const datafrontend = posts?.skillPost?.filter((dataa) => dataa.category === "frontend")
  const databackend = posts?.skillPost?.filter((dataa) => dataa.category === "backend")

  return (
   <div>
      <Title title1="My Skills" title2="My Skills" />
      <Main>
      <div className="div">
        <div className="box1">
          <h1>FrontEnd Skills</h1>
          <div className="bottom">
            <div className="bott">
            {datafrontend?.map((dataa) => (
                <ExperienceCard {...dataa} />
              ))} 
            </div>
          </div>
        </div>
        <div className="box1">
          <h1>BackEnd Skills</h1>
          <div className="bottom">
            <div className="bott">
            {databackend?.map((dataa) => (
                <ExperienceCard {...dataa} />
              ))} 
            </div>
          </div>
        </div>
      </div>
    </Main>
   </div>
  );
};

export default Experience;

const Main = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  margin-block: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Courier New',Courier,monospace;
    font-weight: 900;
    padding: 10px 0px;
    font-size: 26px;
    color: white;
    text-shadow: -1px -1px 3px #2b2a2c;
  }
  .bottom {
    display: flex;
    justify-content: center;
   
  }
  .box1 {
    padding: 15px;
    background-color: ${props => props.theme.bC};
    box-shadow: inset 2px 3px 4px 0px #cfb8b894;;
  }
  .div {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 20px;
    margin-top: 30px;
    width: 60%;
    place-content: center;
    @media (max-width: 700px) {
        grid-template-columns: 1fr ;
        width: 80%;
      }
    .bott {
      display: grid;
      grid-template-columns: 1fr 1fr;
      
    }
  }
`;
