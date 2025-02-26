// import { type FC, type PropsWithChildren } from "react";

// type ImageDeets = PropsWithChildren<{ source: string; imgAlt: string }>;

// type ImageDeets = {
//   source: string;
//   imgAlt: string;
// };

// const Header: FC<ImageDeets> = ({ source, imgAlt }) => {
//   return (
//     <header>
//       <img src={source} alt={imgAlt} />
//     </header>
//   );
// };

// OR

import { type ReactNode } from "react";

type ImageDeets = {
  image: {
    source: string;
    imgAlt: string;
  };
  children: ReactNode;
};

function Header({ image, children }: ImageDeets) {
  return (
    <header>
      <img src={image.source} alt={image.imgAlt} />
      {children}
    </header>
  );
}

export default Header;
