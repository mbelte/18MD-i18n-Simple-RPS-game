import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import lv from "./lv/translation.json";
import en from "./en/translation.json";
import ru from "./ru/translation.json";
import cn from "./cn/translation.json";

export const resources = { lv, en, ru, cn }

let language = localStorage.getItem('lang');
if (!language) {
    language = 'lv'
}

i18next.use(initReactI18next).init({
    fallbackLng: "lv",
    lng: language,
    resources
})