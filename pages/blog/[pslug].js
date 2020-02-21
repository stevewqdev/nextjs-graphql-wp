import { useRouter } from 'next/router'
import Main from "../../lib/layout";
import withData from "../../lib/apollo";
import PostContent from "../../components/postContent/index"

export default withData(props => {
    const router = useRouter()
    const { pslug } = router.query
  
    return (
    <Main>
        <PostContent slug={pslug} />
    </Main>
  );
});