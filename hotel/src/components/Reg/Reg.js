import React from "react";
import Style from "./Reg.module.css";
import RegForm from "./RegForm/RegForm";
export default function Reg() {
  return (
    <div className={Style.backgrImg}>
      <div className={Style.backgr}>
        <div className={Style.regBox}>
          <RegForm/>
        </div>
      </div>
    </div>
  );
}
