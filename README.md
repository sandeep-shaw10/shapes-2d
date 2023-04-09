![Banner](./static/Banner.png)

# Shape Calculator 2D

Shapes Calculator 2D is a powerful and intuitive app for calculating the geometric properties of 2D shapes with ease. Whether you need to find the area, angles, diagonal, or perimeter of a `circle`, `square`, `rectangle`, `triangle`, `rhombus`, `trapezium`, `N-gon`, or `parallelogram`, this app has you covered. With its user-friendly interface, you can easily select the input and output units that suit your needs, including m, cm, km, inches, ft, and yard.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

![coverage](https://img.shields.io/badge/version-0.0.1-cyan)

# Features
- [x] Calculate the properties of 8 different 2D shapes
- [x] Select input and output units from a range of options
- [x] Find area, angles, diagonal, and perimeter with ease
- [x] Intuitive and user-friendly interface
- [x] Suitable for students, teachers, and professionals alike
- [x] Supports both metric and imperial units
- [x] Ad-free for a seamless user experience
- [x] Support rounding off to overcome Floating Point Errors

# Preview and Screenshots
![Image 1](./static/demo.gif)

## Available Shapes

### Circle

```jsx
(radius) => {
    radius,
    diameter,
    circumference,
    area
}
```

### Square

```jsx
(side) => {
    side,
    diagonal,
    perimeter,
    area
}
```

### Rectangle

```jsx
(length, breadth) => {
    length, breadth,
    diagonal,
    perimeter,
    area
}
```

### Triangle

```jsx
(side1, side2, side3) => {
    side1, side2, side3,
    angle1, angle2, angle3,
    circumradius,
    inradius
    perimeter,
    area
}
```

### Rhombus

```jsx
(diagonal1, diagonal2) => {
    diagonal1, diagonal2,
    angle1, angle2,
    side,
    perimeter,
    area
}
```

### Trapezium

```jsx
(base1, base2, height) => {
    base1, base2, height,
    area
}
```

### N-Gon

```jsx
(side, length) => {
    side, length,
    apothem,
    perimeter,
    area,
    interior-angle,
    exterior-angle
}
```

### Parallelogram

```jsx
(base-side, adjacent-side, height) => {
    base-side, adjacent-side, height,
    angle1, angle2,
    diagonal1, diagonal2,
    perimeter,
    area,
}
```

## Available Units
- Centimeter
- Meter
- KiloMeter
- Foot
- Inch
- Yard

## Project Dependencies

### [prackage.json](./package.json)

```json
  "dependencies": {
    "@miblanchard/react-native-slider": "^2.3.1",
    "@react-native-clipboard/clipboard": "^1.11.2",
    "@react-navigation/native": "^6.1.6",
    "@react-navigation/native-stack": "^6.9.12",
    "@react-navigation/stack": "^6.3.16",
    "react": "18.2.0",
    "react-native": "0.71.6",
    "react-native-element-dropdown": "^2.9.0",
    "react-native-safe-area-context": "^4.5.0",
    "react-native-screens": "^3.20.0",
    "react-native-svg": "^13.9.0"
  },
```


# Installation

## Android
You can install the app by downloading the APK file from here and installing it on your Android device. 

![android-tested](https://img.shields.io/badge/tested-✔️-green)
![apk](https://img.shields.io/badge/apk-Coming%20Soon-082f49)

## iOS
For iOS devices, the app is currently not available on the App Store.

![ios-untested](https://img.shields.io/badge/tested-X-red)
![ipa](https://img.shields.io/badge/ipk-Unavailable-082f49)

# Usage
- Open the Shapes Calculator 2D app on your Android device.
- Select the shape you want to calculate the properties for.
- Enter the dimensions of the shape and select the input and output units.
- Tap on the "Calculate" button to see the results.

# Credits
This app was developed by @sandeep-shaw10.

# License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.