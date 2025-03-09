import {useEffect, useRef} from "react";
import styled from "styled-components";
// import Loading from "./Loading.tsx";

const UtterancesComment = () => {
    const commentsEl = useRef<HTMLDivElement>(null);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!commentsEl.current)
            return;

        // 중복 생성 방지: 기존에 script가 있는지 확인
        if (commentsEl.current.firstChild) return;

        const scriptEl = document.createElement("script");
        scriptEl.async = true;
        scriptEl.src = "https://utteranc.es/client.js";
        scriptEl.setAttribute("repo", "sancy1003/chanstory-comments");
        scriptEl.setAttribute("issue-term", "pathname");
        scriptEl.setAttribute("theme", "github-light");
        scriptEl.setAttribute("crossorigin", "anonymous");

        commentsEl.current.appendChild(scriptEl);
    }, []);

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
    width: 100%;
    height: auto;
    min-height: 150px;
`;

const Comment = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export default UtterancesComment;
