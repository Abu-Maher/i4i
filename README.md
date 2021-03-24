# ⚡ i4i
- i4i An Easy-to-use Free URL Shortner API!
## 😏 Some Of Features
- Json Api
- Free & Simple
## 🔌 Getting Started
- You can start install the package on your project:
```bash
npm i i4i
```
- Then Start define it like this:
```javascript
const i4i = require('i4i')
```

## 💡 Some Notes 
- This Package Use Node-Fetch Package
- The Package Using Official i4i Api
- Package Just Have One Method (Short) function
- Package is working with promises means you need to resolve it using async/await or then()

## 🔋 Examples
**Shorten URL**
```js
const i4i = require('i4i');
i4i("https://google.com").then(url =>{
console.log(url);
});
**Shorten with specific slug (custom code)**
```js
const i4i = require('i4i');
i4i("https://google.com", "google").then(url =>{
console.log(url)
});
```
[i4i site !](https://i4i.me)
