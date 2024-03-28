import Typography from "@/sharedui/Typography/Typography";
import Button from "@/sharedui/Button/Button";
import styles from "./page.module.css";


export default function Home() {
  return (
    <>
    <div className={styles.main}>
      <p className={styles.paragraph}>----------------------------------------Variant Changes-----------------------------------------</p>
   <Button variant="accent" size="large" rounded="md">
    Accent
   </Button>
   <Button variant="secondary" size="large" rounded="md">
    Secondary
   </Button>
   <Button variant="outline-primary" size="large" rounded="md">
   Outline-primary
   </Button>
   <Button variant="gray" size="large" rounded="md">
   Gray
   </Button>
   <Button variant="disabled" size="large" rounded="md">
   Disabled
   </Button>
   <Button variant="danger" size="large" rounded="md">
   Danger
   </Button>

    </div>
    <div className={styles.main}>
      <p className={styles.paragraph}>----------------------------------------Size Changes-----------------------------------------</p>
   <Button variant="accent" size="small" rounded="md">
    Small
   </Button>
   <Button variant="secondary" size="medium" rounded="md">
    Medium
   </Button>
   <Button variant="outline-primary" size="large" rounded="md">
   Large
   </Button>
   

    </div>
    </>
  );
}
