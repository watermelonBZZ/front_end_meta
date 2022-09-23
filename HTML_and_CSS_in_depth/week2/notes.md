# CSS Web Layout (week2)

# 1.1 CSS web layout
CSS layouts are all about how the content of your web pages organized when it comes to creating layouts.

The display property specifies the type of box that you want to use for a given html element.

The main difference between the two is that flex box is one dimensional while grid as the word implies is two dimensional.

while the grid increases dimensionality and helps to create an advanced layout with relative ease. It can also lead to increased complications later.

## 1.1.1 flexbox

The default <u>**main axis**</U> is along row direction, can change it by flex-direction.
<u>**cross-axis**</U> is the one that always runs perpendicular to the main axis.

ref:

https://blog.csdn.net/m0_46612221/article/details/120876111

https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-basics-and-terminology


## 1.1.2 Grids


## 1.1.3 Responsives Web Design

Responsive web design is building a product that works across a range of viewports.

@media

如果浏览器窗口的宽度为 600px 或更小时，把 <body> 元素的背景颜色更改为“浅蓝色”：

```
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

@media (min-width: 440px)
```

ref：

https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries#syntax


# 1.2 CSS Selector
## 1.2.1 Attribute and Combination Selectors

Two types:
1. basic one
   .className, #IDName, tagNames
   
2. widely used:
   
   A. syntax variations

   B. nth-of-type and nth-child selectors

   C. *{}

   D. Group Selectors: tag1, tag2 {...}

```
A:
  All A tag elements with class attribute:
  a[class]

  All A tag elements with "meta" in their href attribute
  a[href *= "meta"]

B:
  elementTag: nth-of-type(No.){
              property: value; 
  }


```

3. Combination Selectors
   
   A. Descendant Selectors

   B. Child Selectors(>)
   
   C. General Selectors(~)

   All elements of the same type that follow the specified element.

   D. Adjacent Sibling Selectors(+)

   Only the first element after the specified elements

## 1.2.2 Pseudo Selector
Pseudo-classes are state-based selectors, which means that they allow you to select elements based on their state.

### Syntax

selector : pseudo-class {...property...}

State Pseudo Class

```
a:hover{
  ...
}

a:active{
  ...
}
```

Form Pseudo Class

```
: disabled and enabled

: checked and indeterminate

: valid and invalid
```
specific position-based states

first-of-type, last-of-type, nth-of-type, and nth-last-of-type

## 1.2.3 Pseudo Elements

xxxx

### css-specificity

https://css-tricks.com/specifics-on-css-specificity/


# 1.3 CSS Effects
## 1.3.1 Transform, Transition
```
EXAMPLE 1:
h1 {
    transform: rotate(0deg);
}

h1:hover {
    transform: rotate(20deg);
    transition: 2s
}

EXAMPLE 2:
.box {
    display: grid;
    width: 200px;
    height: 200px;
    margin: 200px auto;
    background-color: green;
    border-radius: 12px;
}

.box:hover {
    transform: rotateZ(60deg);
    background-color: pink;
    opacity: 50%;
    transition: 5s;
}

```

## 1.3.2 CSS Animation

### Syntax
```
    (-webkit-)animation: animation-Name animation-duration (animation-timing-function) (animation-delay) infinite;

    @keyframes animation-name { 

    from {property-a: value-a;}
    to {property-a: value-b;}

    }

    EXAMPLE:
    .box {
    position: relative;
    display: grid;
    width: 200px;
    height: 200px;
    margin: 200px auto;
    background-color: green;
    border-radius: 12px;
    animation: mymove 5s infinite;
    -webkit-animation: mymove 5s infinite;
}

    @keyframes mymove {
        0% {
            top: 0px;
            background: red
        }

        100% {
            top: 200px;
            background: yellow
        }
    }

    @-webkit-keyframes mymove

    /* Safari and Chrome */
        {
        0% {
            top: 0px;
            background: red
        }

        100% {
            top: 200px;
            background: yellow
        }
    }

```

ref:

https://www.jianshu.com/p/b7a9349d2630

https://www.coursera.org/learn/html-and-css-in-depth/lecture/16pez/animation-examples


## 1.3.3 Preprocessors

# 1.4 Debugging
## 1.4.1 Common errors
### A. types of errors: 
syntax, rule-based, knowledge-based errors

### B. Solution: 
Use shorthand, specificity, universal selector before you begin writing your code
(Over specificity can lead to increase loading time for browsers because they need to apply specific rules.)

## 1.4.2 Handling errors

Plug-in :Linter

1. Create and add a file called ‘.stylelinttrc.json’ to your project directory
2. Add the rules in JSON object format as below


```
{ 
"rules": { 

        "alpha-value-notation": "number", 
        "selector-type-case": "lower", 
        "color-no-hex": true 
} 

} 
```

3. Restart the VSCode
4. Add '.stylelinttrc.json' file inside the Extension settings

## 1.4.2 UI testing

compatibility in different devices 
webkit syntax