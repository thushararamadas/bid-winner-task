import React from "react";
import styled from "styled-components";

function SubCategories() {
    const data = [
        {
            id: 1,
            name: "Fixtures",
            type: "C",
        },
        {
            id: 2,
            name: "Switches",
            type: "C",
        },
        {
            id: 3,
            name: "Receptacles",
            type: "C",
        },
        {
            id: 4,
            name: "Computer & Phone",
            type: "C",
        },
        {
            id: 5,
            name: "Fire Alarm",
            type: "C",
        },
        {
            id: 6,
            name: "Fire Alarm",
            type: "C",
        },
        {
            id: 7,
            name: "Fire Alarm",
            type: "C",
        },
    ];
    return (
        <>
            <MainContainer>
                <Top>
                    <Left>
                        <img
                            src={require("../../assets/back.png")}
                            alt="Image"
                        />
                        <p>Sub Categories</p>
                    </Left>
                    <Search>
                        <img
                            src={require("../../assets/Search.svg").default}
                            alt="Image"
                        />
                        <input type="text" placeholder="Search categories" />
                    </Search>
                </Top>
                <Bottom>
                    <TitleDiv>
                        <Title width="slno">Sl No</Title>
                        <Title width="name">Name</Title>
                        <Title>Type</Title>
                        <Title></Title>
                    </TitleDiv>
                    {data.map((item) => (
                        <DataDiv key={item.id}>
                            <Data width="slno">{item.id}</Data>
                            <Data width="name">{item.name}</Data>
                            <Data>{item.type}</Data>
                            <Data>
                                <img
                                    src={
                                        require("../../assets/frontt.svg")
                                            .default
                                    }
                                    alt="Image"
                                />
                            </Data>
                        </DataDiv>
                    ))}
                </Bottom>
            </MainContainer>
        </>
    );
}

export default SubCategories;
const MainContainer = styled.div`
    padding: 30px 20px;
    border-right: 1px solid #b2beb5;
`;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Bottom = styled.div`
    padding: 10px;
    background: #fff;
    margin-top: 20px;
    border-radius: 10px;
`;
const Search = styled.div`
    img {
        transform: translate(23px, 2px);
    }
    input {
        padding: 10px 30px;
        outline: none;
        border: none;
        border-radius: 15px;
        ::placeholder {
            font-size: 18px;
        }
    }
`;
const Left = styled.div`
    display: flex;
    align-items: center;
    p {
        font-size: 22px;
        font-weight: 600;
        margin-left: 10px;
    }
`;
const TitleDiv = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`;
const Title = styled.li`
    width: ${(props) =>
        props.width === "name" ? "70%" : "sl no" ? "20%" : "10%"};
    color: #b2beb5;
    font-size: 18px;
`;
const DataDiv = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 2px;
    border-bottom: 1px solid #b2beb5;
    /* height: 100vh; */
`;
const Data = styled.li`
    width: ${(props) =>
        props.width === "name" ? "70%" : "sl no" ? "20%" : "10%"};
    font-size: 18px;
`;
