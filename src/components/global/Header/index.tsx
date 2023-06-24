import Image from "next/image";
import { DesktopNav, HeaderWrapper, LogoAndLogin, MenuButton, MobileNav } from "./styles";

import logoImg from '../../../assets/logo.svg'
import Link from "next/link";
import LoginButton from "../LoginButton";
import { useWindowDimensions } from "@/src/utils/windowWidth";
import menuButton from '../../../assets/menu.svg'
import { useState } from "react";

export default function Header() {
   let [isMenuOpen, setMenuOpen] = useState(false)

   const OpenMenu = () => {
      console.log(isMenuOpen)
      return !isMenuOpen;
   };


   return (

      <HeaderWrapper>
         <LogoAndLogin>
            <Image src={logoImg} width={322} height={70} alt="" />
            <div>
               <LoginButton
                  content={"SOU ALUNO"}
                  href={'#'}
                  bgColor="gray"
               />
               <LoginButton
                  content={"SOU CLIENTE"}
                  href={'#'}
                  bgColor="yellow"
               />
            </div>
         </LogoAndLogin>
         <DesktopNav
            windowSize={useWindowDimensions()}
         >
            <ul>
               <li><Link href={'#'}>Sobre Nós</Link></li>
               <li><Link href={'#'}>Para Você</Link></li>
               <li><Link href={'#'}>Para Empresas</Link></li>
               <li><Link href={'#'}>Portfólio</Link></li>
               <li><Link href={'#'}>Eventos</Link></li>
            </ul>
            <ul>
               <li> <Link href={'#'}>Parcerias</Link></li>
               <li><Link href={'#'}>Instagram</Link></li>
               <li><Link href={'#'}>YouTube</Link></li>
            </ul>
         </DesktopNav>
         <MobileNav
            windowSize={useWindowDimensions()}
            isMenuOpen={isMenuOpen}
         >
            <MenuButton
               windowSize={useWindowDimensions()}
               onClick={() => setMenuOpen(OpenMenu())}
            >
               <Image
                  src={menuButton}
                  width={30}
                  height={30}
                  alt="Menu"
               />
            </MenuButton>

            <ul>
               <li><Link href={'#'}>Sobre Nós</Link></li>
               <li><Link href={'#'}>Para Você</Link></li>
               <li><Link href={'#'}>Para Empresas</Link></li>
               <li><Link href={'#'}>Portfólio</Link></li>
               <li><Link href={'#'}>Eventos</Link></li>
               <li><Link href={'#'}>Parcerias</Link></li>
               <li><Link href={'#'}>Instagram</Link></li>
               <li><Link href={'#'}>YouTube</Link></li>
            </ul>
         </MobileNav>
      </HeaderWrapper >
   )
}