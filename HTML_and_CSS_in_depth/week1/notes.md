# HTML and CSS in depth
## week1
# 1.1 Course Introduction

## 1.1.1 purpose of Semantic HTML tags
To describe the meaning of the HTML document

# 1.2 Semantic and Meta Tags

## 1.2.1 basic semantic structure

1. Header
   : displays the logo
2. Nav
   : to describe the navigational structure of the website.
3. Main
   : feature the main content of the web page
4. Footer
   : display copyright information

### Purpose of semantic structure
The semantic tags will help the software or SE understand the purpose and meaning of different sections of the document.

## 1.2.2 Metadata
how search engines analyze web pages and how meta tags help provide information for search engines.

### Syntax

```
<meta name= "参数" content= "具体的参数值">
<meta name= "robots" content= "index/noindex, follow/nofollow"> 
<meta name= "keywords" content= "example1, example2">
<meta name= "author" content= "Tom">
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

```

**cheatsheet:**

https://www.coursera.org/learn/html-and-css-in-depth/supplement/8QDS1/metadata-cheat-sheet

https://www.coursera.org/learn/html-and-css-in-depth/supplement/8QDS1/metadata-cheat-sheet


### http-equiv
http-equiv属性 

http-equiv顾名思义，相当于http的文件头作用，它可以向浏览器传回一些有用的信息，以帮助正确和精确地显示网页内容，与之对应的属性值为content，content中的内容其实就是各个参数的变量值

http-equiv属性语法格式是： 

``` 
<meta http-equiv= "参数" content= "参数变量值">；

ref:
https://www.cnblogs.com/liaojie970/p/6373393.html
```

### Bare bones layout

cheatsheet link:

https://www.coursera.org/learn/html-and-css-in-depth/supplement/ZIzeF/semantic-html-cheat-sheet

### The Open Graph protocol (开放图谱协议)

To display information about a website before a user clicks on the link as traditional SEO Meta tags are oriented towards search results, not direct links. 

Instead of the name attribute, the Open Graph Protocol uses the **<u>property</u>** attribute to define the Metadata name. 

Four properties on a webpage: these are **<u>title, type, URL, and image</u>**.

### Reading Material

https://zhuanlan.zhihu.com/p/434055117


### Addtional resources 

a. The Essential Meta Tags for Social Media

```
<!--  Essential META Tags -->
<meta property="og:title" content="European Travel Destinations">
<meta property="og:type" content="article" />
<meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg">
<meta property="og:url" content="http://euro-travel-example.com/index.htm">
<meta name="twitter:card" content="summary_large_image">

<!--  Non-Essential, But Recommended -->
<meta property="og:description" content="Offering tour packages for individuals or groups.">
<meta property="og:site_name" content="European Travel, Inc.">
<meta name="twitter:image:alt" content="Alt text for image">

<!--  Non-Essential, But Required for Analytics -->
<meta property="fb:app_id" content="your_app_id" />
<meta name="twitter:site" content="@website-username">
```

https://css-tricks.com/essential-meta-tags-social-media/

# 1.3 User Input and Forms

## 1.3.1 Forms and validation

validation methods: client side and server side

<u>**Making the most of client-side validation!!**</u>

```
<input type="password" id="pwd" name="pwd" required minlength="x" maxlength="y">
<input type="number" id="quantity" name="quantity" min="1" max="10"> 
```
<u>**fieldset**</u>

The fieldset element defines a group for the radio buttons.

set the id attibute in fieldset , and use the same value for the name attibute of radio buttons

<u>**Pattern**</u>

Defines a particular pattern that an input field value has to fulfill to be considered valid. This attribute expects a <u>**regular expression**</u> to specify the pattern. It works with text, date, search, URL, tel, email and password input types. For example, you can restrict phone numbers to be only from the UK. 

<u>**regular expression**</u>

https://www.liaoxuefeng.com/wiki/1016959663602400/1017639890281664

```
Example:
<input type="tel" id="phone" name="phone" pattern=”^(?:0|\+?44)(?:\d\s?){9,10}$” >  
```

<u>**Submit**</u>

1. Action

It is important to note that action can be a full URL address such as https://meta.com, an absolute path such as /login, or a relative path such as login. 

2. method

GET or POST


input types cheat sheet:

https://www.coursera.org/learn/html-and-css-in-depth/supplement/49iH0/input-types

3. oninput
```
oninput = "this.nextElementSibling.value = this.value"

or:

<input type="range" oninput="myFunction(this.value)">                             
<p id="demo"></p>

<script>
function myFunction(val) {
  document.getElementById("demo").innerHTML = val; 
}
</script>
```
# 1.4 Media Elements

## 1.4.1 Video and audio

<u>**Video**</u>

```
notice: no closing tag for <resource>
<video>
   <source scr="" type="video/ogg(mp4)"> 
</video>

```

<u>**Audio**</u>
```
<audio>
   <source scr="" type="audio/mpeg"> 
</audio>
```

<u>**Image**</u>
can team up with <figure> and <figcaption>

<u>**iFrame**</u>

a.restrict certain browser capabilities with sandbox

b.allow attribute to disable some potentially unsecured browser features
```
<iframe scr="" sandbox allow="camera 'none'; payment 'none';"></iframe>
```


