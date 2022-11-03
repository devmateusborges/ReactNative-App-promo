import React, { useEffect, useRef, useState } from "react";
import LottieView from "lottie-react-native";
import avatarMasculino from "../../assets/animations/avatarMasculino.json";
import avatarFeminino from "../../assets/animations/avatarFeminino.json";
import AnimatedLottieView from "lottie-react-native";
import { ComentCardType } from "../types/types";
import { View, Text, ScrollView } from "react-native";
import { user_Service } from "../service/user_service";
import { coment_styles } from "../styles/components/comentCard";
import { Divider } from "@react-native-material/core";

const user = new user_Service();

export default function ComentCard(props: ComentCardType) {
  const [coments, setcoment] = useState<ComentCardType[]>([]);
  const AvatarRef = useRef<AnimatedLottieView>(null);

  const ListComent = () => {
    setcoment(user.get_all_coment);
  };

  useEffect(() => {
    ListComent();
    AvatarRef.current?.play(200, 200);
  }, []);

  return (
    <>
      {coments.map((coment) => {
        return (
          <>
            <View style={coment_styles.Container_coment} key={coment.ID}>
              {coment.sexo ? (
                <LottieView
                  style={{ height: 37, width: 50 }}
                  source={avatarMasculino}
                  ref={AvatarRef}
                  autoPlay={false}
                  loop={false}
                />
              ) : (
                <LottieView
                  style={{ height: 50, width: 50 }}
                  source={avatarFeminino}
                  ref={AvatarRef}
                  autoPlay={false}
                  loop={false}
                />
              )}

              <View>
                <Text style={coment_styles.title}>{coment.nome}</Text>
                <Text style={coment_styles.coment}>{coment.comentario}</Text>
              </View>
            </View>
            <Divider />
          </>
        );
      })}
    </>
  );
}
