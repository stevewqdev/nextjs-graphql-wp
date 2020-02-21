import { useRouter } from 'next/router'
import Layout from "../../components/layout";
import withData from "../../lib/apollo";
import PostContent from "../../components/postContent/index"

export default withData(props => {
    const router = useRouter()
    const { pslug } = router.query
  
    return (
    <Layout>
        <PostContent slug={pslug} />
    </Layout>
  );
});