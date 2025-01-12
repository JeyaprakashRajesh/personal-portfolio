import React from "react";
import "../styles/MainPage.css"
import LandingPage from "./components/LandingPage/LandingPage";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
export default function MainPage() {
    return (
        <section className="main-container">
            <Header />
            <LandingPage />
            <Content />
        </section>
    );
}
