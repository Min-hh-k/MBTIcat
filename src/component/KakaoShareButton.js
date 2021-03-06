import React from 'react';
import Button from 'react-bootstrap/Button'
// kakao ์ธ์
const {Kakao} = window;

const KakaoShareButton = ({data}) => {
  const url = "https://mbticatmin.netlify.app/"
  const resultUrl = window.location.href;

  React.useEffect(() => {
    Kakao.cleanup();
    Kakao.init("6e6ba7f0c83ef4938325d1be59d06081")
  },[])

  const shareKakao = () => {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '๐ผ์๋น์ง์ฌ ํ๋ณ๊ธฐ ๊ฒฐ๊ณผ๐ผ',
        description: `์๋น ์ง์ฌ๋์ด ๊ณ ์์ด๋ฅผ ํค์ด๋ค๋ฉด ๊ฐ์ฅ ์ ๋ง๋ ๊ณ ์์ด๋ ${data.name}์๋๋ค.`,
        imageUrl: url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: '๋๋ ํ์คํธ ํ๋ฌ๊ฐ๊ธฐ',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ]
    });
  }

  return (
    <Button variant="secondary" onClick={shareKakao} style={{fontFamily: "LeeSeoYun", marginLeft: '20px'}} >ํ์คํธ๊ฒฐ๊ณผ ์นด์นด์คํก ๊ณต์ ํ๊ธฐ</Button>
  )
}

export default KakaoShareButton