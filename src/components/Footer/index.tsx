import { FC } from "react";
import { Footer } from "./styles";

type FooterComponentProps = {};

const FooterComponent: FC<FooterComponentProps> = () => {
     return <Footer>
          &copy; {new Date().getFullYear()} Proxity Studios
     </Footer>
}

export default FooterComponent;