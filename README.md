# refuse

Refuse is a compatibility layer between React and React-Native. It bridges the
gap between DOM elements and View layers by supplying custom components that
work identically between React and Native. By restricting yourself to the
components that Refuse exposes you can share the components that you write
between React (web) and React-Native (mobile).

## Installation

The refuse components are released in the public npm registry and can be installed
by running the following npm command.

```
npm install --save refuse
```

The `--save` instructs npm to automatically the installed version to your
`package.json`.

## Components

The following components are available in refuse. Click on the component names to
learn more about how to use the component and which API methods and properties
are available.

- **[Image](#Image)** Images and background images.
- **[Interact](#interact)** Create a click/touchable region which can trigger a
  specific events (action).
- **[Layer](#layer)** General component to compose different views or layouts.

### Events

The biggest challenge when creating a compatibility layer between Mobile and Web is
the different events and their names that are used for interaction. In refuse we've
decided to remove all `touch` and `mouse` prefixes of the event names and follow
the pointer events naming convention where it made sense. These event names can be
introduced on components that use interaction. So without further ado:

```js
import { Interact, Layer, Component, Text } from 'refuse';

export default class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() => {(
    <Interact press={this.props.press}>
      <Image src={this.props.icon} width=20 height=20 />
      <Text>{this.props.label}</Text>
    </Interact>
  )}
}
```

## License

MIT
