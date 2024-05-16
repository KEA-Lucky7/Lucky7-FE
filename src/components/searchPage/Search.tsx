import * as S from "./styles/SearchStyle";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  const query = useQuery();
  const keyword = query.get("q");

  return (
    <S.SearchContainer>
      {keyword}
    </S.SearchContainer>  
  );
}
