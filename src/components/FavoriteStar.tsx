import React, { useEffect, useRef, useState } from "react";
import LottieView from "lottie-react-native";
import { TouchableHighlight } from "react-native";

import { CardfavoriteStar } from "../types/types";
import AnimatedLottieView from "lottie-react-native";

export default function FavoriteStar(props: CardfavoriteStar) {
  const favorite = useRef<AnimatedLottieView>(null);

  const favoriteStarC = () => {
    if (props.favoriteNumber == 20) {
      favorite.current?.play(0, 30);
    } else if (props.favoriteNumber == 40) {
      favorite.current?.play(0, 35);
    } else if (props.favoriteNumber == 60) {
      favorite.current?.play(0, 39);
    } else if (props.favoriteNumber == 80) {
      favorite.current?.play(0, 40);
    } else if (props.favoriteNumber == 100) {
      favorite.current?.play(0, 120);
    }
  };
  useEffect(() => {
    favoriteStarC();
  }, []);

  return (
    <>
      <LottieView
        style={props.style}
        loop={false}
        source={props.name_file}
        autoPlay={false}
        ref={favorite}
      />
    </>
  );
}
