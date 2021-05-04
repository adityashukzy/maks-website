import React,{useEffect,useState} from "react";
import styles from './new.module.scss'
import axios from "axios";
import Navbar from '../components/Navbar/Navbar'
import { Helmet } from "react-helmet";

const Landing = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        setData(null)
        let email=localStorage.getItem('email')
        axios
          .post("http://localhost:5000/page", {
            email,
          })
          .then(function (response) {
            if (response.status === 200) {
                setData(response.data.violator);
            } else if (response.status === 400) {
              alert("Error?");
            }
          });
    },[])
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://maks-images-aws-bucket.s3.ap-south-1.amazonaws.com/maks-logo.png"
          type="image/icon"
        />
        <title>Admin | Maks ~ safety, simplified.</title>
      </Helmet>
      <Navbar pathname="/admin" />
      <div
        className={`${styles.container} ${styles.center} ${styles.root}`}
        styles={{ backgroundColor: "white" }}
      >
        {data &&
          data.map((i) => {
            return (
              <div className={styles.card} key={i["link-to-image"]}>
                <h1 className={styles.headerr}>Violator Info</h1>
                <p>
                  Confidence score of ML model: {i["confidence-of-prediction"]}
                </p>
                <p> Time of violation: {i["timestamp"]}</p>
                <br />
                <hr />
                <br />
                <div className={styles.fill}>
                  <img src={i["link-to-image"]} alt="img" />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Landing;
