---
title: "Mobx 핵심요약"
path: "/blog/react/mobx"
date: "2019-10-16"
coverImage: ""
author: "Danah"
excerpt: "간단하고, 확장성있는 상태 관리를 위한 라이브러리"
---

## MobX

간단하고, 확장성있는 상태 관리를 위한 라이브러리

## mobx의 상태 관리 flow

![](https://mobx.js.org/assets/getting-started-assets/overview.png)

- **State**: application의 data 상태 (ex. spreadsheet의 data cell)
- **Derivations**: 어플리케이션으로부터 자동으로 계산되는 모든 값을 뜻한다. state의 모든 값은 계산될 수 있다.(ex. spreadsheet의 chart)
- **Reactions**: derivations와 유사한 개념으로 값을 생성하지 않는 함수이다. 자동으로 특정 작업들을 수행시켜 주는데 대체로 I/O(input, output)과 연관된 작업들로 적당할 때 자동으로 DOM을 업데이트 시키거나 네트워크 요청을 하도록 해준다.
- **Actions**: state를 변경하는 모든 것을 말한다. 모두 동기적으로 처리된다.

## 주요 개념

- **Observable State (관찰 받고 있는 상태)**
- **Computed Value (연산된 값)**: 성능 최적화를 위하여 많이 사용되며, 연산에 기반 되는 값이 바뀔 때 만 새로 연산하게하고 바뀌지 않으면 기존의 값을 사용한다.
- **Reactions (반응)**: Observable State의 내부 값이 바뀜에 따라 해야할 일을 정한다.
- **Actions (행동)**: Observable State에 변화를 일으킨다.

## 주요 함수

```javascript
import { observable, reaction, computed, autorun, action, decorate } from "mobx"
import { observer, inject } from "mobx-react"
```

**주로 사용되는 함수**

- **observable**: Observable State를 만들어준다.
- **computed**: 연산된 값을 사용해야 할 때 사용하며, 의존하는 값이 바뀔 때 미리 값을 계산해놓고 조회 할 때는 캐싱된 데이터를 사용한다.
- **action**: data의 state를 변경시킨다.
- **observer**: observable 값이 변할 때 컴포넌트의 forceUpdate 를 호출하게 함으로써 변화가 자동으로 화면에 반영된다.
- **inject:** 스토어에 있는 값을 컴포넌트의 props로 주입하여 컴포넌트에서 스토어에 접근할 수 있게 해준다.

**부가적인 함수**

- **reaction**: state 값이 변경될 때 값 생성 없이 특정 작업을 할 경우에 사용한다.
- **autorun**: reaction이나 computed.observe 대신 사용할 수 있는 함수로, 함수 내에서 사용 되는 값을 주시하고 있다가 그 값이 바뀔 때 마다 자동으로 실행한다.
- **decorate**: decorator 문법 대신 사용할 수 있는 함수로, 각 해당 변수에 mobx 함수를 적용시켜 준다.
- **transaction**: 여러 action을 한번에 발생시킨다

### 카운터 만들기

```javascript
import React, { Component } from "react"
import { decorate, observable, action, computed } from "mobx"
import { observer } from "mobx-react"

class Counter extends Component {
  number = 0

  increase = () => {
    this.number++
  }

  decrease = () => {
    this.number--
  }

  get isZero() {
    return this.number === 0
  }

  render() {
    console.log(this.isZero)

    return (
      <div>
        <h1>{this.number}</h1>
        <button onClick={this.increase}>+1</button>
        <button onClick={this.decrease}>-1</button>
      </div>
    )
  }
}

decorate(observer(Counter), {
  number: observable,
  increase: action,
  decrease: action,
})

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    )
  }
}

export default App
```

#### 클래스형태로 작성하면 decorator 문법을 편하게 쓸 수 있다

```javascript
import React, { Component } from "react"
import ReactDOM from "react-dom"
import { observable, action, computed } from "mobx"
import { Provider, observer, inject } from "mobx-react"

class CounterStore {
  @observable number = 0

  @action increase = () => {
    this.number++
  }

  @action decrease = () => {
    this.number--
  }

  @computed get isZero() {
    return this.number === 0
  }
}

@inject("counter")
@observer
class Counter extends Component {
  render() {
    const { counter } = this.props

    console.log(counter.isZero)

    return (
      <div>
        <h1>{counter.number}</h1>
        <button onClick={counter.increase}>+1</button>
        <button onClick={counter.decrease}>-1</button>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    )
  }
}

const counter = new CounterStore()

ReactDOM.render(
  <Provider counter={counter}>
    <App />
  </Provider>,
  document.getElementById("root")
)
```

#### 함수형

```javascript
import React, { Component } from "react"
import ReactDOM from "react-dom"
import { observable, action, computed } from "mobx"
import { Provider, inject } from "mobx-react"

class CounterStore {
  @observable number = 0

  @action increase = () => {
    this.number++
  }

  @action decrease = () => {
    this.number--
  }

  @computed get isZero() {
    return this.number === 0
  }
}

const Counter = inject(({ counter }) => ({
  number: counter.number,
  increase: counter.increase,
  decrease: counter.decrease,
  isZero: counter.isZero,
}))(props => {
  const { number, increase, decrease, isZero } = props

  console.log(counter.isZero)

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  )
})

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  )
}

const counter = new CounterStore()

ReactDOM.render(
  <Provider counter={counter}>
    <App />
  </Provider>,
  document.getElementById("root")
)
```

## 기본적인 예제

[https://codesandbox.io/s/yv4w13q2q9](https://codesandbox.io/s/yv4w13q2q9)

## 참고

- [MobX](https://mobx.js.org/getting-started)
- [MobX (1) 시작하기](https://velog.io/@velopert/begin-mobx)
- [MobX (2) 리액트 프로젝트에서 MobX 사용하기](https://velog.io/@velopert/MobX-2-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-MobX-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-oejltas52z)
- [MobX (3) 심화적인 사용 및 최적화 방법](https://velog.io/@velopert/MobX-3-%EC%8B%AC%ED%99%94%EC%A0%81%EC%9D%B8-%EC%82%AC%EC%9A%A9-%EB%B0%8F-%EC%B5%9C%EC%A0%81%ED%99%94-%EB%B0%A9%EB%B2%95-tnjltay61n)
- [Mobx 처음 시작해보기(1)](https://medium.com/@jsh901220/mobx-%EC%B2%98%EC%9D%8C-%EC%8B%9C%EC%9E%91%ED%95%B4%EB%B3%B4%EA%B8%B0-a768f4aaa73e)
- [Moxb 처음 시작해보기(2)](https://medium.com/@jsh901220/moxb-%EC%B2%98%EC%9D%8C-%EC%8B%9C%EC%9E%91%ED%95%B4%EB%B3%B4%EA%B8%B0-2-97c88bbd044f)
- [JavaScript Decorators: What They Are and When to Use Them - SitePoint](https://www.sitepoint.com/javascript-decorators-what-they-are/)
