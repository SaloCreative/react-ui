# react-ui

A set of common components for react applications

## Usage

Install

```
yarn add @salocreative/react-ui
```
Include the main SCSS sheet in your applications stylesheet

```
@import '~@salocreative/react-ui/src/scss/styles';
```

The styles use a variables sheet to set colours, default fonts, paddings etc. This is currently comented out in the package so you will need to copy `@salocreative/react-ui/src/scss/variables.scss` into your project directly and modify the values as you need.

##Basic Grid

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

## LICENSE

MIT
