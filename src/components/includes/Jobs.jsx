import React, { useState } from "react";
import styled from "styled-components";

function Jobs({ assemblies, setAssemblies }) {
    const [search, setSearch] = useState("");
    const [remove, setRemove] = useState(assemblies);
    const [filteredCategories, setFilteredCategories] = useState([]);

    const removeItem = (item) => {
        const removeData = remove.filter((items) => items.id !== item.id);
        setRemove(removeData);
    };
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setSearch(inputValue);
        const filtered = assemblies.filter((category) => {
            return category.name
                .toLowerCase()
                .includes(inputValue.toLowerCase());
        });

        setFilteredCategories(filtered);
    };
    return (
        <>
            <MainConatainer>
                <Top>
                    <p
                        style={{
                            fontSize: "25px",
                        }}
                    >
                        Jobs
                    </p>
                    <button></button>
                </Top>
                <TopBox>
                    <LeftDiv>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginTop: "10px",
                            }}
                        >
                            <TitleBig>Job Name</TitleBig>
                            <span>:</span>
                            <TitleTexts>Test Project</TitleTexts>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginTop: "10px",
                            }}
                        >
                            <TitleBig>Job Number</TitleBig>
                            <span>:</span>
                            <TitleTexts>#ABV3265413</TitleTexts>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginTop: "10px",
                            }}
                        >
                            <TitleBig>Phone</TitleBig>
                            <span>:</span>
                            <TitleTexts>9061642326</TitleTexts>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginTop: "10px",
                            }}
                        >
                            <TitleBig>Difficulty Level</TitleBig>
                            <span>:</span>
                            <TitleTexts>
                                <Select>
                                    <option>High</option>
                                    <option>Modarate</option>
                                    <option>Low</option>
                                </Select>
                            </TitleTexts>
                        </div>
                    </LeftDiv>
                    <RightDiv>
                        <JobButton>Job Details</JobButton>
                        <JobButton>Button 2</JobButton>
                        <Button>Button 2</Button>
                    </RightDiv>
                </TopBox>
                <SearchDiv>
                    <Search>
                        <img
                            src={require("../../assets/Search.svg").default}
                            alt="Image"
                        />
                        <input
                            type="text"
                            placeholder="Search categories"
                            value={search}
                            onChange={handleInputChange}
                        />
                    </Search>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "10px",
                        }}
                    >
                        <TitleBig>Sort By</TitleBig>
                        <TitleTexts>
                            <Select>
                                <option>Name</option>
                                <option>Modarate</option>
                                <option>Low</option>
                            </Select>
                        </TitleTexts>
                    </div>
                    <Button>
                        Import
                        <img
                            src={require("../../assets/down.svg").default}
                            alt="down_Image"
                        />
                    </Button>
                </SearchDiv>
                <Bottom>
                    <TitleDiv>
                        <Titles width="slno">Sl No</Titles>
                        <Titles width="name">Assembly Name</Titles>
                        <Titles>Length</Titles>
                        <Titles>Quantity</Titles>
                        <Titles></Titles>
                    </TitleDiv>
                    {filteredCategories.length > 0
                        ? filteredCategories.map((item) => (
                              <DataDiv key={item.id}>
                                  <Data width="slno">{item.id}</Data>
                                  <Data width="name">{item.name}</Data>
                                  <Data>{item.length}</Data>
                                  <Data>{item.quantity}</Data>
                                  <Data
                                      onClick={() => {
                                          removeItem(item);
                                      }}
                                  >
                                      <img
                                          src={
                                              require("../../assets/delete.svg")
                                                  .default
                                          }
                                          alt="Image"
                                      />
                                  </Data>
                              </DataDiv>
                          ))
                        : remove.map((item) => (
                              <DataDiv key={item.id}>
                                  <Data width="slno">{item.id}</Data>
                                  <Data width="name">{item.name}</Data>
                                  <Data>{item.length}</Data>
                                  <Data>{item.quantity}</Data>
                                  <Data
                                      onClick={() => {
                                          removeItem(item);
                                      }}
                                  >
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
            </MainConatainer>
        </>
    );
}

export default Jobs;
const MainConatainer = styled.div`
    padding: 50px 25px;
`;
const Top = styled.div``;
const TopBox = styled.div`
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 25px;
    border-radius: 10px;
    margin-bottom: 20px;
`;
const LeftDiv = styled.div`
    width: 30%;
    span {
        width: 10%;
        display: inline-block;
        text-align: center;
    }
`;
const TitleTexts = styled.p`
    font-size: 14px;
    color: #000;
    width: 30%;
`;
const TitleBig = styled.p`
    width: 40%;
    font-size: 14px;
    color: #939393;
`;
const Title = styled.p`
    font-size: 18px;
    color: #000;
`;
const Select = styled.select`
    /* width: 170px; */
    padding: 3px;
    outline: none;
    border: none;
    border: 1px solid #b2beb5;
    option {
        /* font-size: 18px; */
    }
`;
const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const JobButton = styled.button`
    padding: 7px 25px;
    border-radius: 10px;
    background: #3153cd;
    border: none;
    outline: none;
    color: #fff;
`;
const Button = styled.button`
    padding: 7px 25px;
    border-radius: 10px;
    border: none;
    outline: none;
    color: #3153cd;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background: #fff;
    display: flex;
    align-items: center;
    img {
        margin-left: 10px;
    }
`;
const SearchDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    align-items: center;
`;
const Search = styled.div`
    img {
        transform: translate(23px, 2px);
    }
    input {
        padding: 5px 30px;
        width: 320px;
        outline: none;
        border: none;
        border-radius: 10px;
        ::placeholder {
            font-size: 18px;
        }
    }
`;
const Bottom = styled.div`
    padding: 10px;
    background: #fff;
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
    :last-child {
        text-align: right;
    }
`;
