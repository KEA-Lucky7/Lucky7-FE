import { useState } from "react";
import { useLocation } from "react-router-dom";

import * as S from "./styles/SearchStyle";

function getQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  const query = getQuery();
  const keyword = query.get("q");

  return (
    <S.SearchContainer>
      {keyword}
    </S.SearchContainer>  
  );
}
