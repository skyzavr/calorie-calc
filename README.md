# Calories calculator

[About](#about) | [Details](#some-details) | [Instructions](#instructions)

# Links

<a href="https://github.com/skyzavr/calorie-calc">Repo</a> | <a href="https://calorie-calc-seven.vercel.app">Live</a>

# About

A simple calorie calculator project:

- calculate the BMI
- calculate the calorie rate
- change theme
- change language
- change metric to imperal system

### Stack

React | TS | Vite | MUI | RTK | i18next

## Some details

Here are some formulas that were used for calculation

#### BMI

```math
BMI=\dfrac{weight (kg)}{H^2 (cm)}

```

### Calorie rate

First we need to calculate the basic metabolism (BM):

#### Male

```math
BM=9.99*(weight (kg))+6.25*(height (metres))-4.92*(age (full))+5

```

#### Female

```math
BM=9.99*(weight (kg))+6.25*(height (metres))-4.92*(age (full))-161;

```

#### Then We calculate the norm based on activity (AC).

```math
AC=[ 1.2, 1.375, 1.550, 1.725, 1.900]
```

Calories rate is equal (CR):

```math
CR=BM*AC
```

# Instructions

| Desctiption                               |      Command       |
| ----------------------------------------- | :----------------: |
| Clone repo                                | `git clone [link]` |
| Installing all the necessary dependencies |      `npm i`       |
| Running the app in the development mode   |   `npm run dev `   |
