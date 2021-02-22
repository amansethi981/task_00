import React, { useState, useEffect } from "react";
import { getData } from "../redux/reducer";
import { Pagination  } from "antd";
import Card from "./Card";

const List = () => {
  const [CharacterList, GetCharacterList] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [current, setCurrent] = useState(1);
  const [totalchars,setTotalChars]=useState([]);
  const PageSize = 6;
  const preload = () => {
    getData().then((res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        GetCharacterList(res.data.results.slice((current-1)*PageSize,((current-1)*PageSize)+6));
        setTotalChars(res.data.results);
        const page = totalchars.length / PageSize;
        setTotalPage(page);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const handleChange = (page) => {
    console.log(page);
    setCurrent(page);
    GetCharacterList(totalchars.slice((page-1)*PageSize,((page-1)*PageSize)+6))
  };
  //   console.log(CharacterList);
  return (
    <div>
      <h2>Welecome To Ricky And Morty</h2>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
      {CharacterList.map((chars, id) => {
        return <Card key={id} chars={chars} />;
      })}
      </div>
      <Pagination 
        pageSize={PageSize}
        current={current}
        total={totalchars.length}
        onChange={handleChange}
        style={{ bottom: "0px" }}
      />
    </div>
  );
};
export default List;
