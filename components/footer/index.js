import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_FOOTER = gql`
query GetMyOptionsPage {
  myOptionsPage {
    footer_options {
      copyright
    }
  }
}
`;

function Footer(props) {
    const { data } = useQuery(GET_FOOTER, {
        notifyOnNetworkStatusChange: true
    });

    if(data){
      const footerData = data.myOptionsPage.footer_options 
        return (
          <div>
            <footer>
              <p dangerouslySetInnerHTML={{__html: footerData.copyright}} />
            </footer>
          </div>
        );
    }
    return <div></div>;
}

export default Footer;
