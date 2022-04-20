import Link from "next/link";
import { FC } from "react";
import { CDN } from "../../utils";
import ActiveLinkComponent from "../ActiveLink";
import { Header, Logo, Navigation, NavigationItem } from "./styles";

type HeaderComponentProps = {};

const navigation = {
     items: [
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: "Safety", path: "/safety" },
          { label: "Blog", path: "/blog" },
     ]
}

const HeaderComponent: FC<HeaderComponentProps> = () => {
     return <Header>
          <Link href="/" passHref>
               <Logo src={CDN.ProxityStudiosLogoURI} alt="Proxity Studios Logo" />
          </Link>

          <Navigation>
               {
                    navigation.items.map((item, i) => <ActiveLinkComponent key={i} href={item.path} passHref>
                         <NavigationItem>
                              {item.label}
                         </NavigationItem>
                    </ActiveLinkComponent>)
               }
          </Navigation>

          <button>
               Sign In
          </button>
     </Header>
}

export default HeaderComponent;