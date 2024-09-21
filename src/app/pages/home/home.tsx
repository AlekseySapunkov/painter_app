"use client"
import styles from "./home.module.css"
import Image from "next/image";
import { useState } from "react";
import Form from "@/app/UI/Form";
const Home = () => {
  const[isFormVisible, setFormVisible] = useState(false)  
return (
<>    {isFormVisible && <Form></Form>}
    <main className={styles.main}>
      <h1 className={styles.h1}>Коротко обо мне</h1>
      <div className={styles.introduction}>
        <div className={styles.textAboutMe}> 
          <span className={styles.span}>
            Привет! Меня зовут Ксения Сидорова.
            <br /> Я - художница и муза, а также путешественница, арт-персона.{" "}
            <br />
            Создаю произведения искусства, вдохновляю людей, двигаюсь в потоке
            жизни.
            <br /> Пою, танцую, играю, рисую.
          </span>
        </div>
        <Image src='/selfie.jpg'className={styles.selfie} alt="" width={400} height={300} />
      </div>
    </main></>
  );
}
export default Home