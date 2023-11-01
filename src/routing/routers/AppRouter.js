import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/categories" />} />
            </Routes>
        </>
    );
}

export default AppRouter;
