import { PropsWithChildren } from "react";
import { Text } from "react-native";


type ComponentsProps = PropsWithChildren<{
  navigation: any,
  route: any
}>;


const ProfileScreen = ({navigation, route}: ComponentsProps) => {
    return <Text>This is {route.params.name}'s profile</Text>;
}

export default ProfileScreen