const fetch = require('node-fetch');

module.exports =

 async function short(url, slug){

return await new Promise((res , rej) =>{
 fetch(('https://i4i.me/url') , {method: 'post', body: JSON.stringify({url: url, slug: slug}), headers: { 'Content-Type': 'application/json' }, referrerPolicy: "no-referrer"}).then(async ress =>{
var able = true
ress.json().catch(err =>{
able = false
}).then(json =>{
if(!able) throw new Error("Too many requests")
res(json)
})
 })

 })
}