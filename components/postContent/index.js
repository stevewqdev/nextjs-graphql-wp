import { useQuery } from "@apollo/react-hooks";
import { useRouter } from 'next/router'
import { gql } from "apollo-boost";
import InternalButton from "../../ui/buttons/internalButton"

const GET_POST = gql`
  query GET_POST ($postSlug: String!) {
    postBy(slug: $postSlug) {
      id
      content
      date
      postId
      slug
      status
      title
      author {
        avatar {
          url
        }
        name
        nickname
      }
      featuredImage {
        sourceUrl(size: MEDIUM)
      }
      tags {
        edges {
          node {
            slug
            id
          }
        }
      }
      categories {
        edges {
          node {
            slug
            id
            name
          }
        }
      }
    }
  }
`;

function PostList(props) {

  const router = useRouter()
  const { pslug } = router.query

  const { data } = useQuery(GET_POST, {
    variables: { postSlug: pslug },
    notifyOnNetworkStatusChange: true
  });
  
  if (data) {
    return (
        <>
            <div className="post__wrapper">
                {
                    data 
                    ? <div className="the__post" key={data.postBy.postId}>
                        {
                            data.postBy.featuredImage
                            ? <div className="post__image">
                                <img src={data.postBy.featuredImage.sourceUrl} />
                            </div>
                            : ""

                        }
                        <div className="post__title">{data.postBy.title}</div>
                        <div className="post__content">
                            <div dangerouslySetInnerHTML={{__html: data.postBy.content}} />
                        </div>
                        <div className="post__meta">
                            <div className="post__date">
                                <p>{data.postBy.date}</p>
                            </div>
                            <div className="post__author">
                                <div className="post__author--avatar">
                                    <img src={data.postBy.author.avatar.url} />
                                </div>
                                <div className="post__author--info">
                                    <p>{data.postBy.author.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="post__tags">
                            {
                                data.postBy.tags.edges.map((tag, index) => (
                                <p key={index} data-tag={tag.id}> {tag.slug} </p>
                                ))
                            }
                        </div>
                        <div className="post__cat">
                            {
                                data.postBy.categories.edges.map((categorie, index) => (
                                <p key={index} data-tag={categorie.id}> {categorie.name} </p>
                                ))
                            }
                        </div>
                    </div>
                    : <p>We could not find the post you were looking for...</p>
                }
            </div>
            <div className="return__area">
                <InternalButton buttonLink={'/blog'} buttonText={'Return to blog'}/>
            </div>
        </>
    );
  }
  return <div>Loading...</div>;
}

export default PostList;