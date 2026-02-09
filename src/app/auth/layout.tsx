import { childrenProps } from "@/types";
import React from "react";
import styles from "./common.module.scss";
import authBackground from "../../../public/Loginbackground.jpg";

export default function AuthLayout({ children }: childrenProps) {
  return (
    <main>
      <div className={styles.authPageLayoutWrapper}>
        <div
          className={styles.bannerContent}
          style={{
            backgroundImage: `url(${authBackground.src})`,
          }}
        >
          <p>
            <span className={styles.heading}>
              Discover flavors from around the world
            </span>
            <span className={styles.subHeading}>
              Explore cuisines, find local gems, and order your next favorite
              meal — all in one place.
            </span>
          </p>
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    </main>
  );
}
