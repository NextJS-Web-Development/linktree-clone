import styles from "./page.module.css";
import ProfileComponent from "@/components/profile/profile";

export default function Home() {
  return (
    <div className={styles.page}>
      <ProfileComponent/>
    </div>
  );
}
