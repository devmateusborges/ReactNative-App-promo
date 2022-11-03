import React, { useEffect, useRef, useState } from "react";
import LottieView from "lottie-react-native";
import Loadingjson from "../../assets/animations/Loading.json";
import AnimatedLottieView from "lottie-react-native";
import { LoadingType } from "../types/types";

export default function LoadingS(props: LoadingType) {
  const loadingAnimation = useRef<AnimatedLottieView>(null);

  useEffect(() => {
    loadingAnimation.current?.play(0, 32);
  }, []);

  return (
    <>
      {props.Loading ? (
        <LottieView
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 150,
            height: 200,
            marginLeft: "20%",
          }}
          source={Loadingjson}
          autoPlay
          ref={loadingAnimation}
        />
      ) : (
        <></>
      )}
    </>
  );
}
