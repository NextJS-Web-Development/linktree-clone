import styles from "./profile.module.css";
import { JSX } from "react";
import Image from 'next/image';

export default function ProfileComponent(): JSX.Element {
  return (
    <div>
      <Image src="/PFP-Eagle.jpg" height="100" width="100" alt="Profile Picture" className={styles.profilePicture} />
      <p className={styles.profileName}>Hafemi</p>
      <p className={styles.profileBio}>Fischers Fritz fischt frische Fische.</p>
    </div>
  );
}