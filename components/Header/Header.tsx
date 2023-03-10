import { navLinkVariants } from "@/motions/homePage";
import { NavigationItem } from "@/types/navigationItem";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import WidthContainer from "../WidthContainer/WidthContainer";
import s from "./Header.module.css";

type HeaderProps = {
  navigation: NavigationItem[];
  onOpenMenu(): void;
  onMenuItemClick: (newMenuItemId: number) => void;
};

const Header: FC<HeaderProps> = ({
  navigation,
  onOpenMenu,
  onMenuItemClick,
}) => {
  return (
    <header className={s.header}>
      <WidthContainer className={s.widthContainer}>
        <nav>
          <ul className={s.navigation}>
            {navigation.map(({ id, title, path }) => (
              <motion.li
                className={s.linkContainer}
                key={id}
                variants={navLinkVariants}
                whileHover="hover"
              >
                <Link
                  href={path}
                  onClick={() => onMenuItemClick(id)}
                  className={classNames(s.link)}
                >
                  {title}
                </Link>
                <div aria-hidden="true" className={s.hidden}>
                  {title}
                </div>
              </motion.li>
            ))}
          </ul>
        </nav>
        <button className={s.menuButton} onClick={onOpenMenu}>
          Menu
        </button>
      </WidthContainer>
    </header>
  );
};

export default Header;
