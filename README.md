# react-ui

A set of common components for react applications

## Install

```
yarn add @salocreative/react-ui
```
Include the main SCSS sheet in your applications stylesheet

```
@import '~@salocreative/react-ui/src/scss/styles';
```

The styles use a variables sheet to set colours, default fonts, paddings etc. This is currently comented out in the package so you will need to copy `@salocreative/react-ui/src/scss/variables.scss` into your project directly and modify the values as you need.

## Basic Grid

Include the elements needed at the top of the component it's required in.

```
import { Column, Row, Card } from '@salocreative/react-ui';
```

Implement as follows

```
<Row>
    <Column>
        <Card>My first grid</Card>
    </Column>
</Row>
```

Each of the grid components accepts a `customClasses` prop to add your own classes to each element. This is used like this `<Column customClasses='my-custom-card-class'></Column>`

## Buttons

A set of basic material design style buttons

### Action button

Rounded material desig action button

```
import { ActionButton } from '@salocreative/react-ui';
```

there are two different use cases for the action button. One is using it as a standard link and the other is to use iot as a button with a custom JS action. Examples for each are given below. Note button only supports icons from FontAwesome and no text.

Implement a standard link as follows

```
<ActionButton
    customClasses='my-custom-class'
    icon='fontawesome-key',
    link='/my-custom/link/here'
/>
```

Implement a button with custom action as follows

```
<ActionButton
    customClasses='my-custom-class'
    icon='fontawesome-key',
    type='button'
    buttonPressed={ (e) => this.doSomething(e) }
/>
```
There are also a couple of baked in modifier classes for the action button in the package that will update the button style when passed in on the `customClasses` prop.

- `fixed` : this will fix the button in the bottom left corner of the screen and increase the diameter to 56px
- `no-back` : removes the background colour of the button

### Switch

Action toggle switches (On/Off)

```
import { Switch } from '@salocreative/react-ui';
```

The switch takes it current state from the parent and then emits an event on toggle where we can run a function from the parent based on our use case.

```
<Switch
    label='Online'
    labelOff='Offline'
    state={ this.state.switchToggle }
    switch={ (e) => this.toggleSwitchUpdate(e) }
/>
```

note the label on and off props. If no `labelOff` is provided the label will default to the standard `label` prop value.

## Fixed menu

```
import { FixedMenu } from '@salocreative/react-ui';
```

implement as follows

```
<FixedMenu icon='plus'>
  <a className='fixed-action__item'>
    <FontAwesome name='sitemap' /> Add Category
  </a>
  <a className='fixed-action__item'>
    <FontAwesome name='tag' /> Add Tag
  </a>
  <a className='fixed-action__item'>
    <FontAwesome name='arrows-h' /> Add Dimension
  </a>
  <Link to={ routeCodes.PRODUCT.ADD } className='fixed-action__item btn'>
    <FontAwesome name='plus' /> Add Product
  </Link>
</FixedMenu>
```

The only prop required for the fixed menu is `icon`. As per other components this only supports strings available within FontAwesome.

## LICENSE

MIT
