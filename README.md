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

## TypeAhead

```
import { TypeAhead } from '@salocreative/react-ui';
```
implement as follows

```
<TypeAhead
    items={ productTags.data }
    placeholder='Helper text'
    selectedItem={ (id) => this.addTag(id) }
/>
```
the typeahead takes the following props:

- `items` : this needs to be array of objects with the basic structure that contains a title and id key. THe title is what will be rendered and the id is what will be on slection
- `selectedItem` : this is the return function from the typeahead that is used by the application to process the selected item action
- `placeholder` : string that sets the helper text for the component
- `customClasses` : string of any custom classes you need
- `data`: this is an object that can be used to assign what keys the typeahead will look for in the provided data for filtering and assignment. This need to contain an id and a title key.


## Tag
A custom component to display tags of authors, tags, categories etc.

```
import { Tag } from '@salocreative/react-ui';
```

```
<Tag
    customClasses='custom-tag-class'
    title={ tag.title }
    id={ tag.id }
    removeTag={ (id) => this.removeTag(id) }
/>
```

The tag accepts the following props:

- `customClasses` : Optional string to add your own classes
- `id` : required number field to uniquely identify a tag
- `title` : required string for the tag display text
- `removeTag` : optional function that can be used to remove a given tag (don't supply to make read only)

## Modal
```
import { Modal } from '@salocreative/react-ui';
```
implement as follows

```
<Modal
  isOpen={ this.props.open }
  onClose={ () => this.closeModal() }
  customClasses='large'
  title='Modal title'
  footer='Modal footer content' >

  My modal content goes here

</Modal>
```

The Modal is display is controlled from the parent component so the state to hide or show the modal needs tp be explicitly set. With this in mind the Modal needs/accepts the following props:

- `isOpen` : boolean value of whether the modal should display or not.
- `onClose` : this is a function that will be called when the modal fires a close event.
- `title` : string to set the modals title
- `subtitle` : string to set the modals sub-title
- `footer` : accepts JSX to set the content of the modal footer
- `customClasses`: set custom classes on the modal

**Modal size** currently there are some default sizes configured for the modal window. These can be set by passing the correct class via the `customClasses` prop (yuou can create your own of course)


- `small` - 500px
- default (no class needed) - 900px
- `large` - 1400px
- `x-large` - 100% width

## Loader
```
import { Loader } from '@salocreative/react-ui';
```
implement as follows

```
<Loader display={ this.props.loading } />
```

The Loader display is controlled from the parent component so the state to hide or show the loader needs tp be explicitly set. With this in mind the Loader needs/accepts the following props:

- `display` : boolean value of whether the modal should display or not (default is hidden).
- `style` : currently the default style is a spinner but a string of `inline` can be passed to get a 3 dot inline loader instead


## LICENSE

MIT
