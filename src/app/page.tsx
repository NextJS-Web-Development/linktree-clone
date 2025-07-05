import styles from "./page.module.css";
import ProfileComponent from "@/components/profile/profile";
import ButtonComponent from "@/components/button/button";

export default function Home() {
  return (
    <div className={styles.page}>
      <ProfileComponent />
      <div className={styles.buttonContainer}>
        <ButtonComponent label="GitHub" link="https://github.com/hafemi" iconURL="/IconGitHub.png" />
        <ButtonComponent label="Instagram " link="https://instagram.com/pascal.hafemi/" iconURL="/IconInstagram.png" />
      </div>
    </div>
  );
}
