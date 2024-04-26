import React from "react";
import Style from "./Page.module.css";
import Search from "./Search/Search";
import Calendar from "./Search/Calendar/Calendar";
import Main from "./Main/Main";
import Favorites from "./Favorites/Favorites";
import Header from "./Header/Header";

function Page() {
  return (
    <div className={Style.page}>
      <Header></Header>
      <div className={Style.pageBox}>
        <div>
          <Search></Search>
          <Favorites></Favorites>
        </div>
        <div>
          <Main></Main>
        </div>
      </div>
    </div>
  );
}

export default Page;
