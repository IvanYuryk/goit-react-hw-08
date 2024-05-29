import { Toaster } from "react-hot-toast";
import AppBar from "../AppBar/AppBar";

import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <main>
        <div className={css.container}>{children}</div>
      </main>
      <Toaster
        position="bottom-right"
        gutter={8}
        toastOptions={{
          duration: 6000,
          style: {
            background: "green",
            color: "#fff",
          },
        }}
      />
    </>
  );
};

export default Layout;
