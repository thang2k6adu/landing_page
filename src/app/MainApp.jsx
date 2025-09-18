import React from "react";
import HomeContent from "~/layout/HomeContent";
import ScrollWheel from "~/components/ScrollWheel";
import SocialSidebar from "~/components/SocialSidebar";
import Header from "~/components/Header";

export default function MainApp() {
  return (
    <>
      <Header />
      
      <ScrollWheel />
      <SocialSidebar />
      
      <HomeContent></HomeContent>
    </>
  );
}
