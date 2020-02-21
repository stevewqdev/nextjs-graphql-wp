import { useRouter } from 'next/router'
import React from 'react';
import Layout from "../../components/layout";
import PostContent from "../../components/postContent/index"

export default (props) =>  {
  const router = useRouter()
  const { pslug } = router.query
  return (
    <>
      <Layout>
        <PostContent slug={pslug} />
      </Layout>
    </>
  )
}
