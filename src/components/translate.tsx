"use client"
import { useEffect } from "react";

export default function Translate() {

  useEffect(() => {

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    };

  }, []);
  return (

    <div id="google_translate_element" style={{ position: 'fixed', right: 0, bottom: 0, zIndex: 1000, backgroundColor: 'rgba(255, 255, 255, 0.0)', borderRadius: '10px', padding: '5px', width: "100%" }}></div>
  )

}
