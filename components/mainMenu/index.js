import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_MENU = gql`
  query MyQuery($postSlug: String!) {
    menus(where: {slug: $postSlug}) {
      edges {
        node {
          id
          name
          slug
          menuItems {
            edges {
              node {
                cssClasses
                label
                url
                id
              }
            }
          }
        }
      }
    }
  }
`;

function MainMenu(props) {
    const  locationClass  = props.locationClass
    const  menuSlug = props.menuLocation

    const { data } = useQuery(GET_MENU, {
        variables: { postSlug: menuSlug },
        notifyOnNetworkStatusChange: true
    });
    
    let menuData = false; 

    if(data){
        menuData = data.menus.edges[0].node.menuItems.edges
    }
    
    if(menuData){
        return (
            <div className={`main__menu__wrapper ${locationClass}`}>
                <ul>
                {
                    data.menus.edges[0].node.menuItems.edges.map(item => (
                        <li key={item.node.id}>
                            <Link href={item.node.url}>
                                {item.node.label}
                            </Link>
                        </li>
                    ))
                }
                </ul>
            </div>
        );
    }else{
      return null
    }
}

export default MainMenu;
