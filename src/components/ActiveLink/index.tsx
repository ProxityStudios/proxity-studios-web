import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import { Children, cloneElement, FC, ReactElement } from 'react'


type ActiveLinkComponentProps = LinkProps & {
     children: ReactElement;
     activeClassName?: string;
}

const ActiveLinkComponent: FC<ActiveLinkComponentProps> = ({ children, activeClassName = 'active-route', ...props }) => {
     const { asPath } = useRouter()
     const child = Children.only(children)
     const childClassName = child.props.className || ''

     const className =
          asPath === props.href || asPath === props.as
               ? `${childClassName} ${activeClassName}`.trim()
               : childClassName

     return (
          <Link {...props}>
               {cloneElement(child, {
                    className: className || null,
               })}
          </Link>
     )
}

export default ActiveLinkComponent