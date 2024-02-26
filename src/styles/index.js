import { createGlobalStyle } from "styled-components";
import InterBlack from "../assets/fonts/Inter/Inter-Black.ttf";
import InterLight from "../assets/fonts/Inter/Inter-Light.ttf";
import InterRegular from "../assets/fonts/Inter/Inter-Regular.ttf";
import InterMedium from "../assets/fonts/Inter/Inter-Medium.ttf";
import InterSemiBold from "../assets/fonts/Inter/Inter-SemiBold.ttf";
import InterBold from "../assets/fonts/Inter/Inter-Bold.ttf";
import PoppinsExtraBold from "../assets/fonts/Poppins/Poppins-ExtraBold.ttf";
import PoppinsRegular from "../assets/fonts/Poppins/Poppins-Regular.ttf";
import ArimoBold from "../assets/fonts/Arimo/Arimo-Bold.ttf";
import MontserratRegular from "../assets/fonts/Montserrat/Montserrat-Regular.ttf";
import PromptRegular from "../assets/fonts/Prompt/Prompt-Regular.ttf";
import LatoRegular from "../assets/fonts/Lato/Lato-Regular.ttf";
import "./reset.css";
import "./index.css";

export const GlobalStyle = createGlobalStyle`
:root{
     /* COLORS */
     --text-color: #555555;
     --black-text-color: #1D1D1D;
     --bg-color: #fff;
     --grey-color: #676767;
     --bg-grey: #E9E9E9;
     --black-color: #000;
     --slider-color: #565555;
     --slider-bg: #D9D9D9;
     --text-footer: #5F5A56;
     --text-blue: #024E82;
     --inst-icon: #B05E5E;
     --submit-color: #F5F5F5;
     --stack-color: #5B5B5B;
     --black-mobile: #1D1D1D;
     --inst-icon: #b05e5e;
     --footer-bg: #7B7B7B;
     --form-btn: #407398;
     --form-input: #C8C7C7;
     --black-contact: #3A3939;
     --header-gradient: linear-gradient(180deg, rgba(173, 165, 165, 0.4233) 131.91%, rgba(217, 217, 217, 0) 338.3%);
 
      /* FONTS */
      --font-size: 20px;
      --line-height: 1.2;

      --inter-font-light: ${InterLight};
      --inter-font-regular: ${InterRegular};
      --inter-font-medium: ${InterMedium};
      --inter-font-semibold: ${InterSemiBold};
      --inter-font-bold: ${InterBold};
      --inter-font-black: ${InterBlack};

      --poppins-font-regular: ${PoppinsRegular};
      --poppins-font-extrabold: ${PoppinsExtraBold};

      --arimo-font-bold: ${ArimoBold};

      --montserrat-font-regular: ${MontserratRegular};

      --prompt-font-regular: ${PromptRegular};

      --lato-font-regular: ${LatoRegular};
}

/* FONTS */

@font-face {
    font-family: "Inter", sans-serif;
    src: url(${InterRegular}) format('truetype');
}
@font-face {
    font-family: "Inter", sans-serif;
    src: url(${InterMedium}) format('truetype');
}
@font-face {
    font-family: "Inter", sans-serif;
    src: url(${InterBlack}) format('truetype');
}
@font-face {
    font-family: "Inter", sans-serif;
    src: url(${InterBold}) format('truetype');
}
@font-face {
    font-family: "Inter", sans-serif;
    src: url(${InterLight}) format('truetype');
}
@font-face {
    font-family: "Inter", sans-serif;
    src: url(${InterSemiBold}) format('truetype');
}
@font-face {
    font-family: "Poppins", sans-serif;
    src: url(${PoppinsRegular}) format('truetype');
}
@font-face {
    font-family: "Poppins", sans-serif;
    src: url(${PoppinsExtraBold}) format('truetype');
}
@font-face {
    font-family: "Arimo", sans-serif;
    src: url(${ArimoBold}) format('truetype');
}
@font-face {
    font-family: "Montserrat", sans-serif;
    src: url(${MontserratRegular}) format('truetype');
}
@font-face {
    font-family: "Prompt", sans-serif;
    src: url(${PromptRegular}) format('truetype');
}
@font-face {
    font-family: "Lato", sans-serif;
    src: url(${LatoRegular}) format('truetype');
}
`;
