import styles from "./button.module.css";
import { JSX } from "react";
import Image from "next/image";

interface ButtonComponentProps {
  label: string;
  link: string;
  iconURL: string;
}

export default function ButtonComponent({ label, link, iconURL }: ButtonComponentProps): JSX.Element {

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className={styles.button}>
        <Image src={iconURL} alt={`${label} icon`} width={24} height={24} />
        <p>{label}</p>
      </button>
    </a>
  );
}