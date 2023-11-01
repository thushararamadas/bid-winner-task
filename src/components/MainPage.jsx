import React, { useState } from "react";
import SideBar from "./includes/SideBar";
import styled from "styled-components";
import Categories from "./includes/Categories";
import Jobs from "./includes/Jobs";

function MainPage() {
    const [categories, setCategories] = useState([
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
        {
            id: 8,
            name: "Computer & Phone",
            type: "C",
        },
        {
            id: 9,
            name: "Fire Alarm",
            type: "C",
        },
        {
            id: 10,
            name: "Fire Alarm",
            type: "C",
        },
        {
            id: 11,
            name: "Fire Alarm",
            type: "C",
        },
    ]);
    const [subcategories, setSubcategorie] = useState([
        {
            id: 1,
            name: "Recessed Fluorescent",
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
        {
            id: 8,
            name: "Computer & Phone",
            type: "C",
        },
        {
            id: 9,
            name: "Fire Alarm",
            type: "C",
        },
        {
            id: 10,
            name: "Fire Alarm",
            type: "C",
        },
        {
            id: 11,
            name: "Fire Alarm",
            type: "C",
        },
    ]);
    const [assemblies, setAssemblies] = useState([
        {
            id: 1,
            name: "2”x4” Drop-in T-Bar (1/2” Flex)",
            length: "100 M",
            quantity: "120",
            type: "A",
        },
        {
            id: 2,
            name: "1”x4” Surface Fluor Fixt",
            length: "-",
            quantity: "270",
            type: "A",
        },
        {
            id: 3,
            name: "1/2” EMT DC SS Connector",
            length: "-",
            quantity: "-",
            type: "A",
        },
        {
            id: 4,
            name: "2”x4” Drop-in T-Bar (1” Flex)",
            length: "-",
            quantity: "-",
            type: "A",
        },
        {
            id: 5,
            name: "3” EMT DC SS Connector",
            length: "1200 M",
            quantity: "500",
            type: "A",
        },
        {
            id: 6,
            name: "2”x6” Surface Fluor Fixt",
            length: "",
            quantity: "1200",
            type: "A",
        },
    ]);
    return (
        <>
            <Container>
                <Left>
                    <SideBar />
                </Left>
                <All>
                    <Middle>
                        <Categories
                            assemblies={assemblies}
                            subcategories={subcategories}
                            categories={categories}
                            setCategories={setCategories}
                            setSubcategorie={setCategories}
                            setAssemblies={setAssemblies}
                        />
                    </Middle>
                    <Right>
                        <Jobs
                            assemblies={assemblies}
                            setAssemblies={setCategories}
                        />
                    </Right>
                </All>
            </Container>
        </>
    );
}

export default MainPage;
const Container = styled.div`
    background: #f2f6f9;
    /* height: calc(100vh-90px); */
    display: flex;
`;
const Left = styled.div`
    @media all and (max-width: 1080px) {
        display: none;
    }
`;
const Middle = styled.div`
    width: 45%;
    @media all and (max-width: 1080px) {
        width: 100%;
    }
`;
const Right = styled.div`
    width: 100%;
    margin: 0 auto;
    /* background: violet; */
`;
const All = styled.div`
    display: flex;
    width: 100%;
    @media all and (max-width: 1080px) {
        display: flex;
        flex-direction: column;
    }
`;
