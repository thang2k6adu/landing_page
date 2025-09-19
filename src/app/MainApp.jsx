import React from "react";
import ScrollWheel from "~/components/ScrollWheel";
import SocialSidebar from "~/components/SocialSidebar";
import Header from "~/components/Header";
import AppRouter from "~/router/AppRouter";

export default function MainApp() {
  return (
    <>
      <Header />
      
      <ScrollWheel />
      <SocialSidebar />
      
      <AppRouter />
    </>
  );
}
