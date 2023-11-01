import React from "react";
import styled from "styled-components";

function Header() {
    return (
        <>
            <MainContainer>
                <Logo href="#">
                    <img
                        src={require("../../assets/Logo.svg").default}
                        alt="Logo"
                    />
                </Logo>

                <Middle>
                    <Li>Dashboard</Li>
                    <Li>Jobs</Li>
                    <Li>Calender</Li>
                    <Li>Cost Coding</Li>
                    <Li>Database</Li>
                    <Li>Tutorial</Li>
                </Middle>
                <Box>
                    <Left>
                        <p>Jane Cooper</p>
                        <p>Janecooper@gmail.com</p>
                    </Left>
                    <Right>
                        <img
                            src={require("../../assets/Profile (3).png")}
                            alt="Image"
                        />
                    </Right>
                </Box>

                <Bell>
                    <img
                        src={require("../../assets/BellSimple.svg").default}
                        alt="Bell_icon"
                    />
                </Bell>
            </MainContainer>
        </>
    );
}

export default Header;
const MainContainer = styled.div`
    background: #212d57;
    /* padding: 10px 0; */
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.a`
    width: 18 0px;
    img {
        display: block;
        width: 100%;
    }
`;
const Middle = styled.ul`
    width: 50%;
    display: flex;
    justify-content: space-between;
`;
const Li = styled.li`
    list-style: none;
    color: #fff;
    font-size: 18px;
`;
const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #fff;
    border-radius: 7px;
    padding: 8px 18px;
`;
const Left = styled.div`
    p {
        color: #ffff;
        font-size: 12px;
    }
`;
const Right = styled.div`
    width: 30px;
    img {
        display: block;
        width: 100%;
    }
`;
const Bell = styled.div`
    width: 30px;
    img {
        display: block;
        width: 100%;
    }
`;
