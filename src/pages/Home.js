import React from 'react';
// css in js
import styled from 'styled-components';
import PangImage from '../assets/mainCat.png'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/question');

  }
  return (
    <Wrapper>
    <Header>πΌμλΉμ§μ¬ νλ³κΈ°</Header>
    <Contents>
      <Title>λμκ² λ§λ μ£ΌμΈλμ?</Title>
      <LogoImage>
        <img src={PangImage} className="rounded-circle" width={330} height={330} alt='mainimage'></img>
      </LogoImage>
      <Desc>MBTI κΈ°λ°μΌλ‘ νλ λλ μλ§λ κ³ μμ΄ μ°ΎκΈ°</Desc>
      <Button variant="secondary" style={{fontFamily: "LeeSeoYun", marginTop: "20px"}} onClick={handleClickButton}>νμ€νΈ μμνκΈ°</Button>
    </Contents>
    </Wrapper>
  )
}

export default Home;

const Wrapper = styled.div`
  background-color: pink;
  height: 100vh;
  width: 100%;
`

const Header = styled.div`
  height: 12vh;
  width: 100%;
  background-color: hotpink;
  color: white;
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "LeeSeoYun"
`

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`


const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
  font-family: "LeeSeoYun"

`

const LogoImage = styled.div`
  margin-top: 10px;
`
const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
  font-family: "LeeSeoYun"
`
