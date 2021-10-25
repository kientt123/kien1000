var str = 'hello world'
console.log(str)
for (i=1;i<5;i++)
    console.log(i);

function greeting(name) {
    console.log(name)
}

str ="Khai;Huong;Long;Tam"
str.split(';').forEach(a => {
    console.log(a.toUpperCase())
})

console.log(1)
setTimeout(()=>{
    console.log('2')
},3000)
console.log(3)
