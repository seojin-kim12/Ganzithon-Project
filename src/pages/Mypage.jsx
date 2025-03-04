import axios from "axios";
import { Container } from "../styles/global";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import back from "../assets/back.png";
import account from "../assets/account.svg";
import bread from "../assets/bread.jpg";
import heart from "../assets/Favorite.svg";
import bv from "../assets/bv.png";
import cart from "../assets/cart.png";

const Back = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  cursor: pointer;

  img {
    margin-left: -320px;
    margin-top: -12px;
    width: 14px;
    height: 21px;
  }
`;

const Logo = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -40px;

  img {
    margin-left: 2.7rem;
    margin-right: 2.7rem;
    width: 5.8rem;
    height: 3.4rem;
  }
`;

const Box = styled.div`
  position: relative;
  margin-top: 25px;
  background-color: rgba(255, 255, 255, 0.5);
  width: 360px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(105, 105, 105, 0.2);
`;

const Profile = styled.div`
  img {
    width: 60px;
    margin-left: -240px;
    margin-top: 20px;
  }
`;

const Name = styled.div`
  color: #ff9633;
  font-size: 20px;
  font-weight: 650;
  text-shadow: 2px 2px 4px rgba(172, 172, 172, 0.1);
  margin-top: -58px;
  margin-left: 105px;
  text-align: left;
`;

const Phone = styled.div`
  font-size: 15px;
  margin-top: 4px;
  margin-left: 105px;
  text-align: left;
`;

const TownName = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-left: -290px;
  margin-top: 30px;
  margin-bottom: 0px;
  text-align: left;
`;

const Town = styled.div`
  font-size: 12px;
  margin-top: -18px;
  margin-left: -166px;
  text-align: left;
`;

const Reservation = styled.div`
  position: relative;
  margin-top: 15px;
  background-color: rgba(255, 255, 255, 0.5);
  width: 360px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(143, 143, 143, 0.2);
  text-decoration: none;
`

const PostBox = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  height: 80px;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 0px 2px 4px rgba(107, 107, 107, 0.2);
  cursor: pointer;
`;

const PostImg = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 10px 0px 0px 10px;
  overflow: hidden;
`;

const ScrollBox = styled.div`
  width: 350px;
  height: 440px;
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

const Name_b = styled.div`
  position: relative;
  top: -55px;
  left: 95px;
  color: #000000;
  font-size: 15px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  text-align: left;
`;

const Address = styled.div`
  position: relative;
  top: -52px;
  left: 95px;
  color: black;
  font-size: 11px;
  font-style: normal;
  line-height: normal;
  text-align: left;
`;

const Heart = styled.div`
  margin-top: -108px;
  margin-left: 305px;
`;

// 하단바
const BottomBar = styled.div`
  background-color: #fff7f0;
  height: 52px;
  width: 390px;
  position: fixed;
  bottom: 0;
  box-shadow: 0px -4px 6px rgba(177, 177, 177, 0.2); /* Use a negative margin-top to create the shadow effect on the bottom bar. */
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
  color: #ff7803;
  font-size: 15px;
  font-weight: 550;
  text-shadow: 2px 2px 4px rgba(104, 104, 104, 0.5);
`;

const Content2 = styled.div`
  position: relative;
  margin-top: 3px;
  margin-left: 25px;
  font-size: 11px;
`;

function Mypage() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleDetailClick = () => {
    navigate("/detail");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Back onClick={handleHomeClick}>
          <img src={back} alt="back" />
        </Back>
        <Logo>
          <img src={logo} alt="Bver" />
        </Logo>
        <Box>
          <Profile>
            <img src={account} />
          </Profile>
          <Name>김서진</Name>
          <Phone>서울특별시 성북구 화랑로13길 60</Phone>
        </Box>

        <Reservation onClick={handleCartClick}><p>장바구니</p></Reservation>

        <Reservation><p>예약목록 조회</p></Reservation>

        <TownName>김서진</TownName>
        <Town>님이 찜한 가게</Town>
        <ScrollBox>
          <PostBox onClick={handleDetailClick}>
            <PostImg>
              <img
                //   src={`${process.env.PUBLIC_URL}/images/imgupload_post1.svg`}
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </PostImg>
            <Name_b>오늘의 제빵소</Name_b>
            <Address>경기도 구리시 벌말로 128번길 13</Address>
            <Heart>
              <img src={heart} />
            </Heart>
          </PostBox>
          {/* 이 뒤부터 삭제하셈 */}
          <PostBox onClick={handleDetailClick}>
            <PostImg>
              <img
                //   src={`${process.env.PUBLIC_URL}/images/imgupload_post1.svg`}
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </PostImg>
            <Name_b>오늘의 제빵소</Name_b>
            <Address>경기도 구리시 벌말로 128번길 13</Address>
            <Heart>
              <img src={heart} />
            </Heart>
          </PostBox>
          <PostBox onClick={handleDetailClick}>
            <PostImg>
              <img
                //   src={`${process.env.PUBLIC_URL}/images/imgupload_post1.svg`}
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </PostImg>
            <Name_b>오늘의 제빵소</Name_b>
            <Address>경기도 구리시 벌말로 128번길 13</Address>
            <Heart>
              <img src={heart} />
            </Heart>
          </PostBox>
          <PostBox onClick={handleDetailClick}>
            <PostImg>
              <img
                //   src={`${process.env.PUBLIC_URL}/images/imgupload_post1.svg`}
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </PostImg>
            <Name_b>오늘의 제빵소</Name_b>
            <Address>경기도 구리시 벌말로 128번길 13</Address>
            <Heart>
              <img src={heart} />
            </Heart>
          </PostBox>
          <PostBox onClick={handleDetailClick}>
            <PostImg>
              <img
                //   src={`${process.env.PUBLIC_URL}/images/imgupload_post1.svg`}
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </PostImg>
            <Name_b>오늘의 제빵소</Name_b>
            <Address>경기도 구리시 벌말로 128번길 13</Address>
            <Heart>
              <img src={heart} />
            </Heart>
          </PostBox>
          <PostBox onClick={handleDetailClick}>
            <PostImg>
              <img
                //   src={`${process.env.PUBLIC_URL}/images/imgupload_post1.svg`}
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </PostImg>
            <Name_b>오늘의 제빵소</Name_b>
            <Address>경기도 구리시 벌말로 128번길 13</Address>
            <Heart>
              <img src={heart} />
            </Heart>
          </PostBox>
          <PostBox onClick={handleDetailClick}>
            <PostImg>
              <img
                //   src={`${process.env.PUBLIC_URL}/images/imgupload_post1.svg`}
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </PostImg>
            <Name_b>오늘의 제빵소</Name_b>
            <Address>경기도 구리시 벌말로 128번길 13</Address>
            <Heart>
              <img src={heart} />
            </Heart>
          </PostBox>
          <PostBox onClick={handleDetailClick}>
            <PostImg>
              <img
                //   src={`${process.env.PUBLIC_URL}/images/imgupload_post1.svg`}
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </PostImg>
            <Name_b>오늘의 제빵소</Name_b>
            <Address>경기도 구리시 벌말로 128번길 13</Address>
            <Heart>
              <img src={heart} />
            </Heart>
          </PostBox>
          <PostBox onClick={handleDetailClick}>
            <PostImg>
              <img
                //   src={`${process.env.PUBLIC_URL}/images/imgupload_post1.svg`}
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </PostImg>
            <Name_b>오늘의 제빵소</Name_b>
            <Address>경기도 구리시 벌말로 128번길 13</Address>
            <Heart>
              <img src={heart} />
            </Heart>
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
export default Mypage;
