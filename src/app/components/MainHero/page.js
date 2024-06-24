"use client";

import styles from "@/app/components/MainHero/MainHero.module.css";
import React from 'react'
import Image from "next/image";


const MainHero = () => {
  return (
    <div className={`${styles["hero_container"]}`}>
        <form>
            <input className={`${styles["input_component"]}`} placeholder="Search for a movie"></input>
        </form>
    </div>
  )
}

export default MainHero