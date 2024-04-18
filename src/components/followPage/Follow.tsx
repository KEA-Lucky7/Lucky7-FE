import { useEffect, useState } from "react";
import Header from "../myblogPage/myblogItems/Header";
import * as MS from "../homePage/styles/MainStyle";
import * as BS from "../myblogPage/styles/MyblogPostCss";
import FollowPostList from "../followPage/MyblogPostList";

const Follow = () => {

    return (
        <MS.HomeContainer>
            <Header />
            <MS.MainContainer>
                <div>내 팔로우</div>
                <BS.RightSection>
                    <FollowPostList />
                </BS.RightSection>
            </MS.MainContainer>
        </MS.HomeContainer>

    );
}

export default Follow;