import "./style.css";
import React from "react";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./app/store.ts";
import global_en from "./translations/en/global.json";
import global_ar from "./translations/ar/global.json";
import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18next from "i18next";

const queryClient = new QueryClient();

i18n.use(initReactI18next).init({
  resources: {
    en: {
      global: global_en,
    },
    ar: {
      global: global_ar,
    },
  },
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18next}>
        <Provider store={store}>
          <App />
        </Provider>
      </I18nextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
