import { styled } from "@stitches/react";
import Image from "next/image";

export const Main = styled('main', {

})

export const Banner = styled(Image, {
   width: '100%',
   height: 'auto',
   padding: '0.1rem 2rem 1.5rem',
})

export const ContactUs = styled('section', {
   display: 'flex',
   
   backgroundColor: '$yellow',
   color: '$black',
   fontWeight: 700,
   
   img: {
      width: '50%',
      height: 'auto',
   },
})