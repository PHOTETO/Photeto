import {useEffect, useRef} from "react";
import styled from "styled-components";
const UtterancesComment = ({ theme }: { theme: string }) => {
    const commentsEl = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!commentsEl.current)
            return;

        // 기존 utterances iframe 제거
        const existingIframe = commentsEl.current.querySelector("iframe");

        if (existingIframe) {
            commentsEl.current.innerHTML = ""; // 기존 iframe 삭제
        }

        // 중복 생성 방지: 기존에 script가 있는지 확인
        if (commentsEl.current.firstChild) return;

        const scriptEl = document.createElement("script");
        scriptEl.async = true;
        scriptEl.src = "https://utteranc.es/client.js";
        scriptEl.setAttribute("repo", "sancy1003/chanstory-comments");
        scriptEl.setAttribute("issue-term", "pathname");
        scriptEl.setAttribute("theme", theme == "light" ? "github-light" : "github-dark");
        scriptEl.setAttribute("crossorigin", "anonymous");

        commentsEl.current.appendChild(scriptEl);
    }, [theme]);

    return (
        <>
            <Container>
                <Comment ref={commentsEl}></Comment>
            </Container>
        </>
    );
};

const Container = styled.div`
    position: relative;
    margin: auto;
    width: 90%;
    height: auto;
    min-height: 150px;
`;

const Comment = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export default UtterancesComment;
