import React, { useState } from "react";
import styled from "styled-components";

function AddmOdal({ setAddModal, addModal, name, assemblies, setAssemblies }) {
    const [count, setCount] = useState("");
    const [length, setLength] = useState("");
    const addData = () => {
        if (count !== "" && length !== "") {
            const newAssembly = {
                id: assemblies.length + 1,
                name: name,
                quantity: count,
                length: length,
                type: "A",
            };

            setAssemblies([...assemblies, newAssembly]);
            setAddModal(false);
        } else {
            alert("Please input count and length values.");
        }
    };

    const data = [
        {
            id: 1,
            name: "2”x4” Drop-in T-Bar (1/2” Flex)",
            fct1: "2",
            quantity: "3",
            fct2: "2",
            catalog: "2",
        },
        {
            id: 2,
            name: "1”x4” Surface Fluor Fixt",
            fct1: "3",
            quantity: "2",
            fct2: "2",
            catalog: "2",
        },
    ];
    return (
        <>
            {addModal && (
                <BackContainer>
                    <Overlay onClick={() => setAddModal(false)}></Overlay>
                    <MainContainer>
                        <Title>Add Assembly to the Project</Title>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "10px",
                            }}
                        >
                            <TitleBig>Assembly Name</TitleBig>

                            <TitleTexts>{name}</TitleTexts>
                        </div>
                        <Count>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: "10px",
                                    justifyContent: "space-between",
                                }}
                            >
                                <TitleBigs>Count</TitleBigs>
                                <input
                                    type="number"
                                    onChange={(e) => {
                                        setCount(e.target.value);
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: "10px",
                                    justifyContent: "space-between",
                                }}
                            >
                                <TitleBigs>Length in M</TitleBigs>
                                <input
                                    type="number"
                                    onChange={(e) => {
                                        setLength(e.target.value);
                                    }}
                                />
                            </div>
                        </Count>
                        <p
                            style={{
                                fontSize: "18px",
                                margin: " 20px 0",
                            }}
                        >
                            Assembly Description
                        </p>
                        <Bottom>
                            <TitleDiv>
                                <Titles>Sl No</Titles>
                                <Titles width="name">Assembly Name</Titles>
                                <Titles>Quantity</Titles>
                                <Titles>Fct1</Titles>
                                <Titles>Fct2</Titles>
                                <Titles>Catalog Number</Titles>
                                <Titles></Titles>
                            </TitleDiv>
                            {data.map((item) => (
                                <DataDiv key={item.id}>
                                    <Data>{item.id}</Data>
                                    <Data width="name">{item.name}</Data>
                                    <Data>{item.quantity}</Data>
                                    <Data>{item.fct1}</Data>
                                    <Data>{item.fct2}</Data>
                                    <Data>{item.catalog}</Data>
                                    <Data>
                                        <img
                                            src={
                                                require("../../assets/delete.svg")
                                                    .default
                                            }
                                            alt="Image"
                                        />
                                    </Data>
                                </DataDiv>
                            ))}
                        </Bottom>
                        <div
                            style={{
                                display: "flex",
                                margin: "20px 0",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Button onClick={() => setAddModal(false)}>
                                Cancel
                            </Button>
                            <JobButton
                                onClick={() => {
                                    addData();
                                }}
                            >
                                Add
                            </JobButton>
                        </div>
                    </MainContainer>
                </BackContainer>
            )}
        </>
    );
}

export default AddmOdal;
const BackContainer = styled.div`
    position: fixed;
    transition: 0.3s;
    width: 100%;
    height: 100vh;
    z-index: 1000;
    left: 0;
    top: 0px;
    background: rgba(0, 0, 0, 0);
`;
const Overlay = styled.div`
    position: fixed;
    width: 100%;
    cursor: pointer;
    height: 100vh;
    background: #000;
    opacity: 0.3;
`;
const MainContainer = styled.div`
    width: 700px;
    padding: 40px 50px;
    min-height: 500px;
    background: #fff;
    position: absolute;
    top: 100px;
    left: 350px;
    border-radius: 15px;
`;
const Title = styled.p`
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 30px;
`;
const TitleBig = styled.p`
    font-size: 16px;
    width: 20%;
    color: #939393;
`;
const TitleTexts = styled.p`
    font-size: 14px;
    color: #000;
    width: 30%;
`;
const Count = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: 90%; */
    input {
        padding: 10px 20px;
        border: 1px solid #939393;
        border-radius: 7px;
    }
`;
const TitleBigs = styled.div`
    font-size: 14px;
    width: 45%;
    color: #939393;
    margin-right: 30px;
`;
const Bottom = styled.div`
    padding: 10px;
    background: #f2f6f9;
    margin-top: 20px;
    border-radius: 10px;
`;
const TitleDiv = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`;
const Titles = styled.li`
    width: ${(props) => (props.width === "name" ? "40%" : "10%")};
    color: #b2beb5;
    font-size: 14px;
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
    width: ${(props) => (props.width === "name" ? "40%" : "10%")};
    font-size: 16px;
    :last-child {
        text-align: right;
    }
`;
const JobButton = styled.button`
    padding: 12px 34px;
    border-radius: 10px;
    background: #3153cd;
    border: none;
    outline: none;
    color: #fff;
`;
const Button = styled.button`
    padding: 12px 30px;
    border-radius: 10px;
    border: none;
    outline: none;
    color: #3153cd;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background: #fff;
    display: flex;
    align-items: center;
    margin-right: 20px;
`;
