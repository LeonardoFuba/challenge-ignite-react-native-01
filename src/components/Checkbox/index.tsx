import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { styles } from "./styles";

import Check from '../../assets/check.svg'

interface CheckboxProps extends TouchableOpacityProps {
  value?: boolean;
}

export function Checkbox({ value = false, ...rest }: CheckboxProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7} {...rest}
    >
      {value
        ? (<View style={styles.checkboxChecked}><Check /></View>)
        : (<View style={styles.checkbox} />)
      }
    </TouchableOpacity>
  );
}