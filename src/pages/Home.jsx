import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Container } from "../styles/global";
import logo from "../assets/logo.png";
import account from "../assets/account.svg";
import bread from "../assets/bread.jpg";
import bv from "../assets/bv.png";
import closingsale from '../assets/마감세일사진.png'
import gift from '../assets/수능선물.jpg'
import milk from '../assets/우유빵.png'

const Top = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
  margin-left: -250px;

  img {
    width: 8.8rem;
    height: 4.8rem;
  }
`;

// const Write = styled.div`
//   margin-left: 8rem;
//   margin-top: -35px;
//   font-size: 0.9rem;
//   font-weight: 650;
//   color: #ff8c00;

//   p1 {
//     cursor: pointer;
//     margin-right: 2px;
//     &:hover {
//       text-decoration: underline;
//     }
//   }
//   p2 {
//     cursor: pointer;
//     margin-left: -8px;
//     &:hover {
//       text-decoration: underline;
//     }
//   }
//   p3 {
//     cursor: pointer;
//     margin-right: 10px;
//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

const HomeImg = styled.div`
  position: relative;
  left: 155px;
  top: -55px;
  img {
    width: 38px;
    cursor: pointer;
  }
`;

const Town = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-left: -255px;
  margin-top: 20px;
  margin-bottom: 0px;
`;

const PostBox = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  height: 80px;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 0px 2px 4px rgba(107, 107, 107, 0.2);
`;

const PostImg = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 10px 0px 0px 10px;
  overflow: hidden;
`;

const ScrollBox = styled.div`
  width: 340px;
  height: 255px;
  margin-top: 0.2rem;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    /* WebKit 브라우저의 스크롤바를 숨김 */
    width: 0;
    background: transparent;
  }
  padding-bottom: 20px;
`;

const Name = styled.div`
  position: relative;
  top: -60px;
  left: 95px;
  color: #000000;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  text-align: left;
  //text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
`;

const Address = styled.div`
  position: relative;
  top: -56px;
  left: 95px;
  color: black;
  font-size: 12px;
  font-style: normal;
  line-height: normal;
  text-align: left;
`;
// 찜한 가게
const HeartTown = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-left: -225px;
  margin-top: 25px;
  margin-bottom: 10px;
`;

const HeartBox = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  width: 140px;
  height: 190px;
  border-radius: 10px;
  margin-left: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

const HeartImg = styled.div`
  position: relative;
  width: 140px;
  height: 190px;
  border-radius: 10px;
  overflow: hidden;
`;

const HeartBoxs = styled.div`
  display: flex; // 이 부분을 추가하여 가로로 정렬
  overflow-x: auto; // 가로 스크롤을 활성화합니다.
  width: 390px;
  //   border: 1px solid #000;
  &::-webkit-scrollbar {
    /* WebKit 브라우저의 스크롤바를 숨김 */
    width: 0;
    background: transparent;
  }
`;

const HeartName = styled.div`
  position: relative;
  top: -50px;
  left: 4px;
  color: white;
  font-family: SUIT;
  font-size: 21px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  text-align: left;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
`;
//하단 바
const BottomBar = styled.div`
  background-color: #fda85d;
  height: 53.5px;
  width: 100%;
  box-shadow: 0px -4px 6px rgba(131, 131, 131, 0.2); /* Use a negative margin-top to create the shadow effect on the bottom bar. */
  margin-top: 1.3rem;
  bottom: 0;
`;

const BottomName = styled.div`
  margin-top: -5px;
  margin-left: -265px;
  img {
    width: 70px;
  }
`;

const Content = styled.div`
  position: relative;
  margin-top: -45px;
  margin-left: 25px;
  color: #fff;
  font-size: 15px;
  font-weight: 550;
  text-shadow: 2px 2px 4px rgba(83, 83, 83, 0.5);
`;

const Content2 = styled.div`
  position: relative;
  margin-top: 3px;
  margin-left: 25px;
  color: #fff;
  font-size: 11px;
`;

const Adver = styled.div`
  background-color: #fff7f0;
  display: flex;
  height: 150px;
  border-radius: 1rem;
  box-shadow: 1px 4px 6px rgba(102, 102, 102, 0.2);
  width: 22.2rem;
  margin-top: -25px;

  div {
    display: flex;
    flex-direction: column;
    width: 14rem;

    h2 {
      margin: 0;
      margin-top: 1.5rem;
      color: #ff7803;
      text-shadow: 2px 2px 4px rgba(190, 190, 190, 0.5);
    }

    p {
      margin: 0;
      margin-top: 1rem;
      font-size: 0.8rem;
    }

    .extra {
      margin-top: 0.5rem;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  img {
    width: 12rem;
    height: 150px;
    border-radius: 0 1rem 1rem 0;
  }
`;

function Home() {
  const navigate = useNavigate();
  const advertisements = [
    {
      id: "adv1",
      title: "오늘의 제빵소",
      description: "3만원 이상 구매 시",
      extraDescription: "3000원 할인",
      img: closingsale,
    },
    {
      id: "adv2",
      title: "외계인 방앗간",
      description: "2023 수능 선물은",
      extraDescription: "외계인 방앗간에서",
      img: gift,
    },
    {
      id: "adv3",
      title: "모어 댄 밀크",
      description: "신선한 우유와 버터를 사용하여",
      extraDescription: "풍미 가득한 빵",
      img: milk,
    },
  ];

  const [currentAdvIndex, setCurrentAdvIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAdvIndex(
        (prevIndex) => (prevIndex + 1) % advertisements.length
      );
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const currentAdvertisement = advertisements[currentAdvIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Top>
          <img src={logo} alt="Bver" />
        </Top>
        {/* <Write>
          <p1 onClick={handleSignupClick}>회원가입</p1>
          <p3>/</p3>
          <p2 onClick={handleLoginClick}>로그인</p2>
        </Write> */}
        <HomeImg>
          <Link to="/Mypage">
            <img src={account} alt="account" />
          </Link>
        </HomeImg>

        <Adver id={currentAdvertisement.id}>
          <div>
            <h2>{currentAdvertisement.title}</h2>
            <p>{currentAdvertisement.description}</p>
            <p className="extra">{currentAdvertisement.extraDescription}</p>
          </div>
          <img src={currentAdvertisement.img} />

        </Adver>

        <HeartTown>마감세일 중인 빵집</HeartTown>
        <HeartBoxs>
          <HeartBox>
            <HeartImg>
              <img
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </HeartImg>
            <HeartName>오늘의 제빵소</HeartName>
          </HeartBox>
          <HeartBox>
            <HeartImg>
              <img
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </HeartImg>
            <HeartName>오늘의 제빵소</HeartName>
          </HeartBox>
          <HeartBox>
            <HeartImg>
              <img
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </HeartImg>
            <HeartName>오늘의 제빵소</HeartName>
          </HeartBox>
          <HeartBox>
            <HeartImg>
              <img
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </HeartImg>
            <HeartName>오늘의 제빵소</HeartName>
          </HeartBox>
          <HeartBox>
            <HeartImg>
              <img
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </HeartImg>
            <HeartName>오늘의 제빵소</HeartName>
          </HeartBox>
        </HeartBoxs>
        <Town>우리 동네 빵집</Town>
        <ScrollBox>
          <PostBox>
            <PostImg>
              <img
                //   src={`${process.env.PUBLIC_URL}/images/imgupload_post1.svg`}
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </PostImg>
            <Name>오늘의 제빵소</Name>
            <Address>경기도 구리시 벌말로 128번길 13</Address>
          </PostBox>
          <PostBox>
            <PostImg>
              <img
                //   src={`${process.env.PUBLIC_URL}/images/imgupload_post1.svg`}
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </PostImg>
            <Name>오늘의 제빵소</Name>
            <Address>경기도 구리시 벌말로 128번길 13</Address>
          </PostBox>
          <PostBox>
            <PostImg>
              <img
                //   src={`${process.env.PUBLIC_URL}/images/imgupload_post1.svg`}
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </PostImg>
            <Name>오늘의 제빵소</Name>
            <Address>경기도 구리시 벌말로 128번길 13</Address>
          </PostBox>
          <PostBox>
            <PostImg>
              <img
                //   src={`${process.env.PUBLIC_URL}/images/imgupload_post1.svg`}
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </PostImg>
            <Name>오늘의 제빵소</Name>
            <Address>경기도 구리시 벌말로 128번길 13</Address>
          </PostBox>
        </ScrollBox>

        <BottomBar>
          <BottomName>
            <img src={bv} />
          </BottomName>
          <Content>우리가 왜 사용해야할까?</Content>
          <Content2>그 해답은 클릭하여 확인해 주세요</Content2>
        </BottomBar>
      </Container>
    </motion.div>
  );
}

export default Home;
