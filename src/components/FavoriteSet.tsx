import React, { useEffect, useRef, useState } from "react";
import LottieView from "lottie-react-native";
import { TouchableHighlight } from "react-native";
import Favorite from "../../assets/animations/favorite.json";
import AnimatedLottieView from "lottie-react-native";

export default function ButtonFavoriteProduto() {
  const [favoriteb, setfavoriteb] = useState(false);
  const animationRef = useRef<AnimatedLottieView>(null);
  const firstRef = useRef(true);

  useEffect(() => {
    if (firstRef.current) {
      if (favoriteb) {
        animationRef.current?.play(50, 50);
      } else {
        animationRef.current?.play(0, 0);
      }
      firstRef.current = false;
    } else if (favoriteb) {
      animationRef.current?.play(0, 50);
    } else {
      animationRef.current?.play(50, 0);
    }
  }, [favoriteb]);

  return (
    <>
      <TouchableHighlight
        underlayColor="none"
        onPress={() => setfavoriteb(!favoriteb)}
      >
        <LottieView
          style={{
            width: 70,
            height: 70,
          }}
          loop={false}
          source={Favorite}
          autoPlay={false}
          ref={animationRef}
        />
      </TouchableHighlight>
    </>
  );
}
