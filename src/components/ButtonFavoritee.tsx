import React, { useEffect, useRef, useState } from "react";
import LottieView from "lottie-react-native";
import { TouchableHighlight } from "react-native";
import Favorite from "../../assets/animations/favorite.json";
import AnimatedLottieView from "lottie-react-native";

export default function ButtonFavoritee() {
  const [favoriteb, setfavoriteb] = useState(false);
  const favorite = useRef<AnimatedLottieView>(null);
  const favoritee = useRef(true);

  useEffect(() => {
    if (favoritee.current) {
      if (favoriteb) {
        favorite.current?.play(120, 120);
      } else {
        favorite.current?.play(0, 0);
      }
      favoritee.current = false;
    } else if (favoriteb) {
      favorite.current?.play(0, 30);
    } else {
      favorite.current?.play(30, 0);
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
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
          }}
          loop={false}
          source={Favorite}
          autoPlay={false}
          ref={favorite}
        />
      </TouchableHighlight>
    </>
  );
}
