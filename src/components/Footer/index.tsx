import { FC } from "react";
import { Footer } from "./styles";

type FooterComponentProps = {};

const FooterComponent: FC<FooterComponentProps> = () => {
     return <Footer>
          Copyright &copy; {new Date().getFullYear()} Proxity Studios Inc. All rights reserved.
     </Footer>
}

export default FooterComponent;
