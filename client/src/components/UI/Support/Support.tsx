import React from "react";
import { FaShippingFast, FaLock, FaRedoAlt, FaHeadset } from "react-icons/fa";

import classes from "./Support.module.css";

const data = [
  {
    svg: <FaShippingFast />,
    title: "送料無料",
    dec: "※1,000円以上",
  },
  {
    svg: <FaLock />,
    title: "セキュリティ",
    dec: "セキュリティ対策万全",
  },
  {
    svg: <FaRedoAlt />,
    title: "返品可能",
    dec: "10日以内なら返品可能",
  },
  {
    svg: <FaHeadset />,
    title: "サポート体制",
    dec: "24時間いつでも対応可",
  },
];

const Support = () => {
  return (
    <section className={classes["Icons-Container"]}>
      <div className={classes.Icons}>
        {data.map(({ svg, title, dec }, idx) => {
          return (
            <React.Fragment key={idx}>
              {svg}
              <div className={classes.Content}>
                <h3>{title}</h3>
                <p>{dec}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Support;
