import React, { useState } from "react";
import styled from "styled-components";
import AddmOdal from "./AddmOdal";

function Categories({ assemblies, subcategories, categories, setAssemblies }) {
    const [addModal, setAddModal] = useState(false);
    const [value, setValue] = useState("categories");
    const [search, setSearch] = useState("");
    const [name, setName] = useState("");

    const [filteredCategories, setFilteredCategories] = useState([]);

    // const assemblies = [
    //     {
    //         id: 1,
    //         name: "2x4” Drop-In T-Bar (1/2” Flex)",
    //         type: "C",
    //     },
    //     {
    //         id: 2,
    //         name: "Switches",
    //         type: "C",
    //     },
    //     {
    //         id: 3,
    //         name: "Receptacles",
    //         type: "C",
    //     },
    //     {
    //         id: 4,
    //         name: "Computer & Phone",
    //         type: "C",
    //     },
    //     {
    //         id: 5,
    //         name: "Fire Alarm",
    //         type: "C",
    //     },
    //     {
    //         id: 6,
    //         name: "Fire Alarm",
    //         type: "C",
    //     },
    //     {
    //         id: 7,
    //         name: "Fire Alarm",
    //         type: "C",
    //     },
    //     {
    //         id: 8,
    //         name: "Computer & Phone",
    //         type: "C",
    //     },
    //     {
    //         id: 9,
    //         name: "Fire Alarm",
    //         type: "C",
    //     },
    //     {
    //         id: 10,
    //         name: "Fire Alarm",
    //         type: "C",
    //     },
    //     {
    //         id: 11,
    //         name: "Fire Alarm",
    //         type: "C",
    //     },
    // ];
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setSearch(inputValue);
        if (value === "categories") {
            const filtered = categories.filter((category) => {
                return category.name
                    .toLowerCase()
                    .includes(inputValue.toLowerCase());
            });

            setFilteredCategories(filtered);
        } else if (value === "sub-categories") {
            const filtered = subcategories.filter((category) => {
                return category.name
                    .toLowerCase()
                    .includes(inputValue.toLowerCase());
            });

            setFilteredCategories(filtered);
        } else {
            const filtered = assemblies.filter((category) => {
                return category.name
                    .toLowerCase()
                    .includes(inputValue.toLowerCase());
            });

            setFilteredCategories(filtered);
        }
    };
    return (
        <>
            <MainContainer>
                <Top>
                    <Left>
                        <img
                            src={require("../../assets/back.png")}
                            alt="Image"
                        />
                        {value === "categories" ? (
                            <p>Categories</p>
                        ) : value === "sub-categories" ? (
                            <p>Sub Categories</p>
                        ) : (
                            <p>Assemblies</p>
                        )}
                    </Left>
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
                </Top>
                <Bottom>
                    <TitleDiv>
                        <Title width="slno">Sl No</Title>
                        <Title width="name">Name</Title>
                        <Title>Type</Title>
                        <Title></Title>
                    </TitleDiv>
                    {value == "categories" ? (
                        <div>
                            {filteredCategories.length > 0 ? (
                                <div>
                                    {filteredCategories.map((item) => (
                                        <DataDiv key={item.id}>
                                            <Data width="slno">{item.id}</Data>
                                            <Data width="name">
                                                {item.name}
                                            </Data>
                                            <Data>{item.type}</Data>
                                            <Data
                                                onClick={() => {
                                                    // setAddModal(true);
                                                    setValue("sub-categories");
                                                }}
                                            >
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
                                </div>
                            ) : (
                                <div>
                                    {categories.map((item) => (
                                        <DataDiv key={item.id}>
                                            <Data width="slno">{item.id}</Data>
                                            <Data width="name">
                                                {item.name}
                                            </Data>
                                            <Data>{item.type}</Data>
                                            <Data
                                                onClick={() => {
                                                    // setAddModal(true);
                                                    setValue("sub-categories");
                                                }}
                                            >
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
                                </div>
                            )}
                        </div>
                    ) : value == "sub-categories" ? (
                        <div>
                            {filteredCategories.length > 0
                                ? filteredCategories.map((item) => (
                                      <DataDiv key={item.id}>
                                          <Data width="slno">{item.id}</Data>
                                          <Data width="name">{item.name}</Data>
                                          <Data>{item.type}</Data>
                                          <Data
                                              onClick={() => {
                                                  // setAddModal(true);
                                                  setValue("assemblies");
                                              }}
                                          >
                                              <img
                                                  src={
                                                      require("../../assets/frontt.svg")
                                                          .default
                                                  }
                                                  alt="Image"
                                              />
                                          </Data>
                                      </DataDiv>
                                  ))
                                : subcategories.map((item) => (
                                      <DataDiv key={item.id}>
                                          <Data width="slno">{item.id}</Data>
                                          <Data width="name">{item.name}</Data>
                                          <Data>{item.type}</Data>
                                          <Data
                                              onClick={() => {
                                                  // setAddModal(true);
                                                  setValue("assemblies");
                                              }}
                                          >
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
                        </div>
                    ) : value == "assemblies" ? (
                        <div>
                            {filteredCategories.length > 0
                                ? filteredCategories.map((item) => (
                                      <DataDiv key={item.id}>
                                          <Data width="slno">{item.id}</Data>
                                          <Data width="name">{item.name}</Data>
                                          <Data>{item.type}</Data>
                                          <Data
                                              onClick={() => {
                                                  setAddModal(true);
                                                  setName(item.name);
                                              }}
                                          >
                                              <img
                                                  src={
                                                      require("../../assets/add.svg")
                                                          .default
                                                  }
                                                  alt="Image"
                                              />
                                          </Data>
                                      </DataDiv>
                                  ))
                                : assemblies.map((item) => (
                                      <DataDiv key={item.id}>
                                          <Data width="slno">{item.id}</Data>
                                          <Data width="name">{item.name}</Data>
                                          <Data>{item.type}</Data>
                                          <Data
                                              onClick={() => {
                                                  setAddModal(true);
                                                  setName(item.name);
                                              }}
                                          >
                                              <img
                                                  src={
                                                      require("../../assets/add.svg")
                                                          .default
                                                  }
                                                  alt="Image"
                                              />
                                          </Data>
                                      </DataDiv>
                                  ))}
                        </div>
                    ) : (
                        ""
                    )}
                </Bottom>
            </MainContainer>
            <AddmOdal
                setAddModal={setAddModal}
                addModal={addModal}
                name={name}
                assemblies={assemblies}
                setAssemblies={setAssemblies}
            />
        </>
    );
}

export default Categories;
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
