import { createElement, Component, render} from './toy-react'

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>my Component</h1>
        {this.children}
      </div>
    )
  }
}

render(<MyComponent id='a' class='c'>
  <div>123</div>
  <div></div>
</MyComponent>, document.body)

// window.a = <div id='a' className='haha'>
//   <div />
//   <div />
//   <div />
// </div>