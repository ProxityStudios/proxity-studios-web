import dynamic from "next/dynamic"

export { default as HeaderComponent } from "./Header"
export { default as ActiveLinkComponent } from "./ActiveLink"

export const DynamicHeaderComponent = dynamic(() => import('../components/Header'))
