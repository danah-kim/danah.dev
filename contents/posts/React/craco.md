---
title: "CRACO란?"
path: "/blog/react/craco"
date: "2019-10-15"
coverImage: ""
author: "Danah"
excerpt: "Create React App Configuration Override, an easy and comprehensible configuration layer for create-react-app"
---

## CRACO

[@craco/craco](https://www.npmjs.com/package/@craco/craco)

Create React App Configuration Override의 약자로 create-react-app을 위한 configuration layer이다.

react 프로젝트를 설정하고 관리하는 CLI 도구인 CRA(Create-React-App)로 만들면, webpack 같은 것들을 자동으로 다뤄주기 때문에 웹 개발 프로젝트를 쉽게 설정 할 수 있다. 그러나 webpack config를 바꾸고 싶으면 프로젝트를 eject 시켜야하는데 그렇게 되면 CRA가 자동 컨트롤 연결이 끊어진다. 한 번 eject 하면 되돌릴 수 없고, 프로젝트의 react-scripts 업데이트와 동기화를 수동으로 해야한다. Craco는 이 문제를 해결해준다.

root 폴더에 `craco.cofig.js` 파일 한 개를 추가하면, `eject`을 사용하지 않고서 CRA의 장점을 가질 수 있고 eslint, babel, postcss의 configurations 등을 커스터마이징 할 수 있다.

craco.config.js

```javascript
module.exports = {
  babel: {
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
    ],
  },
}
```

이 경우 mobx를 decorator 문법으로 사용하기 위해 babel 설정을 해주려고 사용하였다.

## 참고

- [Using Create-React-App + Craco + Typescript to build apps for both the Web and Electron](https://medium.com/@andrew.rapo/using-create-react-app-craco-to-build-apps-for-both-the-web-and-electron-8f4ab827877f)
- [MobX (2) 리액트 프로젝트에서 MobX 사용하기](https://velog.io/@velopert/MobX-2-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-MobX-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-oejltas52z)
