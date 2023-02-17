import { Link, useMatch, useResolvedPath } from "react-router-dom";
import i18next from 'i18next';
import { useTranslation } from "react-i18next";
import style from "./Navbar.module.scss";

type NavLinkType = {
  to: string;
  children: string;
};

const Navbar = () => {
  const { t } = useTranslation();

  const changeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.currentTarget.value
    i18next.changeLanguage(lang)
    localStorage.setItem('lang', lang);
  }

  return (
    <nav className={style.nav}>
      <NavLnk to="/">{t("homePage")}</NavLnk>
      <NavLnk to="/game">{t("gamePage")}</NavLnk>
      <NavLnk to="/scoreboard">{t("scorePage")}</NavLnk>
      <select 
        className={style.select}
        onChange={changeLang}
        >
        <option value="lv">Latviešu</option>
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="cn">中国人</option>
      </select>
    </nav>
  );
};

function NavLnk({ to, children }: NavLinkType) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });

  return (
    <Link to={to} className={`${style.item} ${isActive ? style.active : ""}`}>
      {children}
    </Link>
  );
}

export default Navbar;
