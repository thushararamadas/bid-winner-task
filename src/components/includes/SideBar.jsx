import React, { useState } from "react";
import styled from "styled-components";

function SideBar() {
    const [id, setId] = useState();
    const data = [
        {
            id: 1,
            name: "Notes",
        },
        {
            id: 2,
            name: "Take Off",
        },
        {
            id: 3,
            name: "Extension",
        },
        {
            id: 4,
            name: "Dilb",
        },
        {
            id: 5,
            name: "Dilb",
        },
        {
            id: 6,
            name: "Dilb",
        },
        {
            id: 7,
            name: "Dilb",
        },
        {
            id: 8,
            name: "Dilb",
        },
        {
            id: 9,
            name: "Dilb",
        },
    ];
    return (
        <>
            <Back href="#">
                <img
                    src={require("../../assets/revert.svg").default}
                    alt="Image"
                />
                <p>Back to Jobs</p>
            </Back>
            {data.map((item) => (
                <MainContainer
                    onClick={() => {
                        setId(item.id);
                    }}
                    className={item.id === id ? "active" : ""}
                    key={item.id}
                >
                    <Icon>
                        <img
                            src={require("../../assets/Article.svg").default}
                            alt="Image"
                        />
                    </Icon>
                    <Text>{item.name}</Text>
                </MainContainer>
            ))}
        </>
    );
}

export default SideBar;
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #b2beb5;
    padding: 20px 8px;
    background: #fff;
    &.active {
        background: #f2f6f9;
        border-left: 6px solid #f09819;
        border-bottom: 0;
    }
`;
const Icon = styled.div`
    width: 25px;
    img {
        display: block;
        width: 100%;
    }
`;
const Text = styled.p`
    font-size: 14px;
    color: #b2beb5;
`;
const Back = styled.a`
    padding: 10px 8px;
    background: #3153cd;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    img {
        display: block;
        width: 25px;
    }
    p {
        color: #fff;
        font-size: 12px;
        margin-top: 5px;
    }
`;
