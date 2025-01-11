import React from "react";
import "../styles/MainPage.css"
import LandingPage from "./components/LandingPage/LandingPage";
import Content from "./components/Content/Content";
export default function MainPage() {
    return (
        <section className="main-container">
            <LandingPage />
            <Content />
        </section>
    );
}
