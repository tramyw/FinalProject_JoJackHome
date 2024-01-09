import React from "react";
import styles from "./Profile.module.css";
import NewNavbar from "./NewNavbar";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";

import { Button, CircularProgress, Stack } from "@mui/material";

const Profile = (Props) => {
  const Data = [
    {
      HKSCDA_dog: [
        {
          類別: "狗狗",
          名字: "DOT",
          性別: "女",
          歲數: "4個月",
          晶片: "未植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/3725",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/UXXfm9371WAWz0rqEGj5sVOkp0sqYZyUbcTpLY8q.jpeg",
        },
        {
          類別: "狗狗",
          名字: "WAKKO",
          性別: "女",
          歲數: "4個月",
          晶片: "未植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/3724",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/Qe6GzL0XuhAzCDngsHrJnHgTNLYDJCnWhEMoexQH.jpeg",
        },
        {
          類別: "狗狗",
          名字: "SUKI",
          性別: "女",
          歲數: "10歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3722",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/LlwYwIhH1tZHFWJztmRD6iHRfX3GMRd7IWdlWNMQ.jpeg",
        },
        {
          類別: "狗狗",
          名字: "小新",
          性別: "男",
          歲數: "5歲",
          晶片: "已植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/3719",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/iMAc2TgR110ummw4vOVWmBg6JeCYOUrDt08vxL36.jpeg",
        },
        {
          類別: "狗狗",
          名字: "小葵",
          性別: "女",
          歲數: "5歲",
          晶片: "已植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3718",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/EiCQAdWztXb9QyaLeLPj5jcnh8lQP6wjZwdmRcVW.jpeg",
        },
        {
          類別: "狗狗",
          名字: "秋爽爽",
          性別: "女",
          歲數: "6個月",
          晶片: "未植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/3715",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/uGujUgDnLmer5MJo9oXB9U0cQQSAZB6g5yt7HrkD.jpeg",
        },
        {
          類別: "狗狗",
          名字: "墨寶",
          性別: "男",
          歲數: "2歲",
          晶片: "已植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3714",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/w9NOvkpbWrZ9BUrz5jEBfIUPB0LT8yg92Vi8POhT.jpeg",
        },
        {
          類別: "狗狗",
          名字: "LILIYA",
          性別: "女",
          歲數: "13歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3713",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/Or62lFtR8vaSOJYKhm2nDXhBD9emtFJKKzPn0hS1.jpeg",
        },
        {
          類別: "狗狗",
          名字: "秋色",
          性別: "男",
          歲數: "3個月",
          晶片: "未植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/3711",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/gNMQ9dcPgNdVFJf7RzaHX88vewNrEV8q2aOhtOCR.jpeg",
        },
        {
          類別: "狗狗",
          名字: "秋意",
          性別: "女",
          歲數: "3個月",
          晶片: "未植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/3710",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/rlSEBXPENOfrEH91yTqakmtjoZ7m2WmxQdEUEMKY.jpeg",
        },
        {
          類別: "狗狗",
          名字: "秋風",
          性別: "女",
          歲數: "3個月",
          晶片: "未植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/3709",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/i4aIXgaITZI9pMyXBO62RnCkG66ghe7ED1wLZz60.jpeg",
        },
        {
          類別: "狗狗",
          名字: "SNOOPY",
          性別: "男",
          歲數: "7個月",
          晶片: "未植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/3683",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/rxF7JRvEYPinvysEQl5luunM1hnsFeTumjnNeq9I.jpeg",
        },
        {
          類別: "狗狗",
          名字: "VOLVO",
          性別: "女",
          歲數: "5個月",
          晶片: "未植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/3675",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/UDryrR17PvWgjtnh5HhXSeCEB3HqkLpLM1SalRMm.jpeg",
        },
        {
          類別: "狗狗",
          名字: "JAGUAR",
          性別: "女",
          歲數: "5個月",
          晶片: "未植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/3665",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/eamMjfIEzgBSAs84fdYYmAhcibVBUqr9r63Oqbhw.jpeg",
        },
        {
          類別: "狗狗",
          名字: "LOTUS",
          性別: "女",
          歲數: "4個月",
          晶片: "未植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/3663",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/yDqdQVcNKMHLedYcm1VjX40SC8b3vNH6HtRIix0A.jpeg",
        },
        {
          類別: "狗狗",
          名字: "KIA",
          性別: "女",
          歲數: "5個月",
          晶片: "未植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/3646",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/uttyIytJ91VYR3Va2PPo3ROsyTT6RjRs7vZMTmez.jpeg",
        },
        {
          類別: "狗狗",
          名字: "TIGER",
          性別: "男",
          歲數: "7個月",
          晶片: "未植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/3553",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/sL0Fx4h2NDxZbKdM3JMApn88NvWmA5rhJgr8uxCJ.png",
        },
        {
          類別: "狗狗",
          名字: "JESSIE",
          性別: "女",
          歲數: "9個月",
          晶片: "未植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/3463",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/41XFD2UGVbU3oqGppaVu3E5fPGQB3CxoRgRwrBPl.jpeg",
        },
        {
          類別: "狗狗",
          名字: "HAYLEE",
          性別: "女",
          歲數: "8歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3439",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/SaabLoMLgvIMRWxrQnQ3geRVTEtQ0fFhUIGCU9Sy.jpeg",
        },
        {
          類別: "狗狗",
          名字: "NOTHING",
          性別: "男",
          歲數: "5歲",
          晶片: "已植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3391",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/YiiQFIaa93mb7JwDSP9WqndJzxvAtCVoT21aEHGX.jpeg",
        },
        {
          類別: "狗狗",
          名字: "傻豹",
          性別: "男",
          歲數: "12歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3328",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/tDFgvqWcwJ3dv2rirHjBaGzYzLYh8lpbKlyWXusN.jpeg",
        },
        {
          類別: "狗狗",
          名字: "PINKY",
          性別: "女",
          歲數: "10歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3324",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/rWTD3nlzeouE4mZyEJa2SY8Pu2fbUJNRuvkLkq0D.jpeg",
        },
        {
          類別: "狗狗",
          名字: "阿笨",
          性別: "男",
          歲數: "11歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3186",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/N14rr0psiQNPMArrKrqS8P7D1wGhlDsoAsisJCrY.jpeg",
        },
        {
          類別: "狗狗",
          名字: "美斯",
          性別: "女",
          歲數: "2歲",
          晶片: "/",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3059",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/r3Gm8jKGaOcjgDUxhD9337dtRJqGSA5bwAIA9kLU.jpeg",
        },
        {
          類別: "狗狗",
          名字: "SCOOBY",
          性別: "男",
          歲數: "10歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/2844",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/EsvKxqarg2iN0seZZaEabWCS9TUHukxhZ9p4KJsu.jpeg",
        },
        {
          類別: "狗狗",
          名字: "SHAGGY",
          性別: "男",
          歲數: "10歲",
          晶片: "已植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/2843",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/XBG8wgiwFFUD3GznIpcThf5FNRHxzxMlAcqcFN3P.jpeg",
        },
        {
          類別: "狗狗",
          名字: "科科",
          性別: "男",
          歲數: "7歲",
          晶片: "已植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/2625",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/4L4bOJhWO5jBIa7bHxsnHs9r6UzTXZZK3qVllQ3N.jpeg",
        },
        {
          類別: "狗狗",
          名字: "牛奶妹",
          性別: "女",
          歲數: "6歲",
          晶片: "未植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/2624",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/x7T745XNsVQ3Qjn4z2CeHyW6H3FDqjsQAoE7QZm8.jpeg",
        },
        {
          類別: "狗狗",
          名字: "KOBE",
          性別: "男",
          歲數: "6歲",
          晶片: "未植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/2623",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/1Reek3ioZTH1nxFpethPohJLYVFNClJssTFFbMW2.jpeg",
        },
        {
          類別: "狗狗",
          名字: "ROSE",
          性別: "女",
          歲數: "9歲",
          晶片: "已植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/2582",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/wWHPhf3LPEaj4i5DH9QLXA2z7pHualuANQWBOsGs.jpeg",
        },
        {
          類別: "狗狗",
          名字: "牛丼",
          性別: "男",
          歲數: "1歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/2551",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/HbUzZ0LYGLfEEbgfPQd3kyAVLSiqSS6L8ykuO8Yk.jpeg",
        },
        {
          類別: "狗狗",
          名字: "BECKY",
          性別: "女",
          歲數: "5歲",
          晶片: "已植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/2057",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/LMv3NJprcYRA6o0cCASfgCNbrffIgzNrL8ZmDW63.jpeg",
        },
        {
          類別: "狗狗",
          名字: "BATMAN",
          性別: "男",
          歲數: "12歲",
          晶片: "已植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/1924",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/YTLW7XWOioYSRTdCAEMMNrviEG5sFhbVElEzwsdv.jpeg",
        },
        {
          類別: "狗狗",
          名字: "BETTINA",
          性別: "女",
          歲數: "9歲",
          晶片: "已植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/1921",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/dK7V8Mp67IngvUTEmfi6LYkqdbJN875qfA2ivw0K.png",
        },
        {
          類別: "狗狗",
          名字: "Q比",
          性別: "男",
          歲數: "3歲",
          晶片: "已植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/1582",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/acegfaFcw6rTKkBzZM7p5f460U16MEZtCmgwN7HC.jpeg",
        },
        {
          類別: "狗狗",
          名字: "GEMBALLA",
          性別: "女",
          歲數: "8歲",
          晶片: "已植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/1577",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/5rWrloAXwNJQst3m21M8Hn433O2emElnP0UXvtR2.jpeg",
        },
        {
          類別: "狗狗",
          名字: "珍寶豬",
          性別: "女",
          歲數: "4歲",
          晶片: "已植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/1169",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/NTxaCZ81TviUYAum2tegwepGTH0cfaDethhPjhkG.jpeg",
        },
        {
          類別: "狗狗",
          名字: "BLINKY",
          性別: "女",
          歲數: "14歲",
          晶片: "已植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/835",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/Qgaj3baIeGkPA9BCkMk5F243dTu7usi99sJcSViG.jpeg",
        },
        {
          類別: "狗狗",
          名字: "朱古力",
          性別: "女",
          歲數: "11歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/529",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/MQf7ZHJf8FtQK5StU5XBuDxcigG3E9yz7TetmqFj.jpeg",
        },
      ],
      HKSCDA_cat: [
        {
          類別: "貓貓",
          名字: "秋天",
          性別: "女",
          歲數: "1歲",
          晶片: "/",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3813",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/RX06kMq7k9HtZsCXHW6SDWS3iNoNkTOCALea02gB.jpeg",
        },
        {
          類別: "貓貓",
          名字: "加菲",
          性別: "男",
          歲數: "7歲",
          晶片: "/",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3811",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/TMKf26VJTzwhISISIbcxchoxpf8K0m5UiNxxULNh.jpeg",
        },
        {
          類別: "貓貓",
          名字: "神瞳",
          性別: "女",
          歲數: "2個月",
          晶片: "未植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/3761",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/1KHrXYt2g9Tn1Jd6BSmPqIJpXAKlB6dOszhl14BM.jpeg",
        },
        {
          類別: "貓貓",
          名字: "梅木",
          性別: "女",
          歲數: "10個月",
          晶片: "/",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3759",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/0A2b5p2neuINu4HI0k0d7U5fgvufLwOpBO17u2A2.jpeg",
        },
        {
          類別: "貓貓",
          名字: "噹噹",
          性別: "男",
          歲數: "10個月",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3750",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/gEZMcmdehcHk3aNqWJwTk8TWKLthGQ3nPV17LO3J.jpeg",
        },
        {
          類別: "貓貓",
          名字: "幸來",
          性別: "女",
          歲數: "11個月",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3749",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/mJRiiUvAd08xqwz5O3ywrFceZKuGy4VdUwiDAx1Q.jpeg",
        },
        {
          類別: "貓貓",
          名字: "由里",
          性別: "女",
          歲數: "11個月",
          晶片: "/",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3748",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/bSALYTmRdRYi8IvS4Ceblhsbt8MZ6JFo7Afd8UI2.jpeg",
        },
        {
          類別: "貓貓",
          名字: "比比",
          性別: "女",
          歲數: "1歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3733",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/JGnHu435BfV2gYa0c2epqOlZDFCaj9TknSwc0O1y.jpeg",
        },
        {
          類別: "貓貓",
          名字: "古圓圓",
          性別: "女",
          歲數: "9個月",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3731",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/KaPb2V9CNaPcDelAlRQQ9Bhrh7Kr0YTRCh9ASp9d.jpeg",
        },
        {
          類別: "貓貓",
          名字: "樹頭",
          性別: "男",
          歲數: "2歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3730",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/zKBWrZhTDQEi1V37KkduccCl9i2oP5K8LrrrBgSN.jpeg",
        },
        {
          類別: "貓貓",
          名字: "荷包蛋",
          性別: "男",
          歲數: "8個月",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3693",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/JBcCR4cUF4hCdSUqNUHgd5YBqbav3XClgotqkmxa.jpeg",
        },
        {
          類別: "貓貓",
          名字: "太陽蛋",
          性別: "男",
          歲數: "8個月",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3692",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/na0QNTfEopTVxwWvTDir9rkRs7cH4AdzQOgSotpB.jpeg",
        },
        {
          類別: "貓貓",
          名字: "古公子",
          性別: "男",
          歲數: "3歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3629",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/zWehqPk6wg8USESnRFbDAh6SidcTwOaM6oWaNQ9x.jpeg",
        },
        {
          類別: "貓貓",
          名字: "JANET J",
          性別: "女",
          歲數: "6個月",
          晶片: "未植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/3628",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/qHsudN4OHVtEz0iqmL2ocdk79lozfWm4vFHd2EVn.jpeg",
        },
        {
          類別: "貓貓",
          名字: "阿桐",
          性別: "女",
          歲數: "6個月",
          晶片: "未植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/3624",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/r1eDcfpsSroBBSXGCdNlT6NsM9OZR6UDqTWK0osq.jpeg",
        },
        {
          類別: "貓貓",
          名字: "阿寶",
          性別: "男",
          歲數: "6個月",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3622",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/f5doG4a99MsN5S9qIFIHyW1bybYxasJDE0NcSGkN.jpeg",
        },
        {
          類別: "貓貓",
          名字: "精靈妹",
          性別: "女",
          歲數: "6個月",
          晶片: "未植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/3619",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/PvTgkU3louGe3BHZ6W1sZQVdk0BHeoOfi8dLEvPe.jpeg",
        },
        {
          類別: "貓貓",
          名字: "苑苑",
          性別: "女",
          歲數: "1歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3610",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/S52tsXXCyZWbQZRLPVAPPrZbMNrrZAyTFpRjHed2.jpeg",
        },
        {
          類別: "貓貓",
          名字: "元舞",
          性別: "女",
          歲數: "1歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3599",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/ywrO2DlcrChcxIYlSlhSUqckUdLCIgtHkA3DJxdE.jpeg",
        },
        {
          類別: "貓貓",
          名字: "金莎糖",
          性別: "男",
          歲數: "6個月",
          晶片: "未植入",
          絕育: "未絕育",
          href: "https://hkscda.com/animal/id/3598",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/A7dZw4mhLMF3NnvwjOncsJA5GH2qQMurLxacWYAG.jpeg",
        },
        {
          類別: "貓貓",
          名字: "阿叻",
          性別: "男",
          歲數: "5歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3590",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/7PrWTIaFByMIMw7DOtTpTOhx4uIZbcg0shbndHhK.jpeg",
        },
        {
          類別: "貓貓",
          名字: "娃娃菜",
          性別: "女",
          歲數: "1歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3468",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/g5wJfnpT0YnDeAZhdg60ADWSXlnGVl9nH8s2zw1i.jpeg",
        },
        {
          類別: "貓貓",
          名字: "阿豹",
          性別: "女",
          歲數: "15歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3420",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/UxRRWGhOSTfGAfJtKRJBnF7K0sPIx51iDoAEghSN.jpeg",
        },
        {
          類別: "貓貓",
          名字: "小虎",
          性別: "男",
          歲數: "9個月",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3415",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/3WHDJzQV0O1TR6RgF7rvRpJBuEWlG0C53HD1dsuY.jpeg",
        },
        {
          類別: "貓貓",
          名字: "塗塗",
          性別: "女",
          歲數: "1歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3402",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/5p8YYLk3WoKoNgC8W4JXFDM9uH5YhIGtOb7uD9Xx.jpeg",
        },
        {
          類別: "貓貓",
          名字: "朦豬眼",
          性別: "男",
          歲數: "2歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3356",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/oPJyY1qD2k8lUCmoU5CIpkTKb1iIjEbrSOqF12N7.jpeg",
        },
        {
          類別: "貓貓",
          名字: "WONG WONG",
          性別: "女",
          歲數: "14歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3350",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/6V1M7vvrZBqG25y7cVcvJgAsfcBNv71g2orwswOR.jpeg",
        },
        {
          類別: "貓貓",
          名字: "松果",
          性別: "男",
          歲數: "2歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3330",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/n4V307xLXqG7sbcVBiCsz7xUMyX6RWvYrLsHyaGA.jpeg",
        },
        {
          類別: "貓貓",
          名字: "高妙思",
          性別: "女",
          歲數: "1歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3264",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/jR5j3vVnHDCUv2jOnQXSsKNP5rvZ3o9gXDQfayWw.jpeg",
        },
        {
          類別: "貓貓",
          名字: "美味米",
          性別: "男",
          歲數: "3歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3260",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/Px1AGnn35l9YSthQIfP3aUhvBixPznko3WxYXoPC.jpeg",
        },
        {
          類別: "貓貓",
          名字: "乖乖",
          性別: "男",
          歲數: "1歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3259",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/oC1vDnxu6o5YsgwopSnucifn40u4URRbG8etS5xs.jpeg",
        },
        {
          類別: "貓貓",
          名字: "淺淺",
          性別: "男",
          歲數: "2歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3240",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/y4utVIxodOB1WHcgMwFi5jN3dT1ARLKNmkwjJsXh.jpeg",
        },
        {
          類別: "貓貓",
          名字: "CARGO",
          性別: "女",
          歲數: "1歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3237",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/UYdgajrJQbMN4570sLwTGBAfQU9R5LLefijJrlDa.jpeg",
        },
        {
          類別: "貓貓",
          名字: "餐肉包",
          性別: "女",
          歲數: "1歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3180",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/T5kWfZSu2xZso04i3NUb1GsrFlSVG0D1S5Bk1Gnw.jpeg",
        },
        {
          類別: "貓貓",
          名字: "蒜茸包",
          性別: "女",
          歲數: "1歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3177",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/htXHAg9aokSmojgZQk3UopUjc5rdgzvqGfTCiVjZ.jpeg",
        },
        {
          類別: "貓貓",
          名字: "夏帆",
          性別: "女",
          歲數: "1歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3114",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/XFkgbmX06kyCfdi6OkQSjpgaqZFvHryMAOUHGmtY.jpeg",
        },
        {
          類別: "貓貓",
          名字: "JUMP",
          性別: "男",
          歲數: "4歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/3025",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/7tRjsYwM9OkTLWi5KxSBtf41H0pcARh1M7ZcXaQr.jpeg",
        },
        {
          類別: "貓貓",
          名字: "阿豆",
          性別: "男",
          歲數: "11歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/2974",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/EWIjTog2lY5Q6XsJmdoJlyesBTbV2TVtJ3Aqae1y.jpeg",
        },
        {
          類別: "貓貓",
          名字: "薯格",
          性別: "女",
          歲數: "7歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/2931",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/HN1FLSoiehU9ImvsZxcGKacHShzyo59wCyW8iHNU.jpeg",
        },
        {
          類別: "貓貓",
          名字: "玳玳",
          性別: "女",
          歲數: "3歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/2778",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/QS2gW1dhxPVOrt0Z0G2n8zoaC9cOFi5mnqzuFAQs.jpeg",
        },
        {
          類別: "貓貓",
          名字: "鄧不利多",
          性別: "男",
          歲數: "6歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/2774",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/HwOtU81JdrNAJkocl0NoOLgYAbg2j7B9JoUTcfbi.jpeg",
        },
        {
          類別: "貓貓",
          名字: "抹茶",
          性別: "男",
          歲數: "6歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/2751",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/8oTc6LNPBkcK3XS7O5FiD9x61MYhmBWwX61lbno3.jpeg",
        },
        {
          類別: "貓貓",
          名字: "LILI",
          性別: "女",
          歲數: "7歲",
          晶片: "未植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/2738",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/oeVAZ3Io2hL0Aez04vQFzASgQjHSZbz446k9mLwK.jpeg",
        },
        {
          類別: "貓貓",
          名字: "元宵",
          性別: "女",
          歲數: "8歲",
          晶片: "已植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/2665",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/jy2m2cpWkLuxY9E8BMEeN3PEU0Ggn8kUU4kIvc3o.jpeg",
        },
        {
          類別: "貓貓",
          名字: "OMAR",
          性別: "男",
          歲數: "5歲",
          晶片: "已植入",
          絕育: "已絕育",
          href: "https://hkscda.com/animal/id/1715",
          image:
            "https://hkscda.com/HKSCDA/storage/app/public/animals/gQBnXnCxWQLpWDXwFdPcqyiNgvzm82w6usXgwZe5.jpeg",
        },
      ],
    },
  ];
  return (
    <div className={styles["containerA"]}>
      <NewNavbar />;
      <Stack direction="row" justifyContent="space-evenly" spacing={3}>
        <div>
          <h1>{Props.名字}</h1>
          <p>
            我是 {Props.性別} {Props.類別}, 我的歲數是 {Props.歲數}
          </p>
          <p>
            我現時 {Props.晶片} 晶片, 而且 {Props.絕育} 喔
          </p>
          <br></br>
          <br></br>
          <p>
            性別: {Props.性別}({Props.絕育})
          </p>
          <p>歲數: {Props.歲數}</p>
          <p>晶片: {Props.晶片}</p>
          <br></br>
          <br></br>
          <div>
            <CircularProgress />
            <p>狗狗準備好返屋企，你準備好未?</p>
            <p>領養前，停一停諗一諗</p>
          </div>
          <div>
            <a href="https://www.spca.org.hk/zh-hant/adoptions/k06-007-foster/">
              <Button variant="contained">帶我回家</Button>
            </a>
          </div>
        </div>
        <div>
          <ImageGallery />
        </div>
      </Stack>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default Profile;
