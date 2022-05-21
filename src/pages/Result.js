import React from 'react';
// css in js
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ResultData } from '../assets/data/resultdata';
import KakaoShareButton from '../component/KakaoShareButton';

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti');
  // 최종 도출한 결과 객체
  const [resultData, setResultData] = React.useState({})

  React.useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti)
    setResultData(result);
  },[mbti])

  console.log(resultData)
  return (
    
    <Wrapper>
    <Header>예비집사 판별기</Header>
    <Contents>
      <Title>결과 보기?</Title>
      <LogoImage>
        <img src={ resultData.image } className="rounded-circle" width={330} height={330} alt='mainimage'></img>
      </LogoImage>
      <Desc>예비 집사님은 { resultData.best } 입니다.</Desc>
      <Desc>예비 집사님과 찰떡궁합인 고양이는 { resultData.name } 입니다.</Desc>
      <Desc style={{width : '200pt'}}> { resultData.desc }</Desc>
      <ButtonGroup>
      <Button style={{fontFamily: "LeeSeoYun"}} onClick={() => navigate("/")} >테스트 시작하기</Button>
      <KakaoShareButton></KakaoShareButton>
      </ButtonGroup>
    </Contents>
    </Wrapper>
  )
}

export default Result;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`

const Header = styled.div`
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
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
`