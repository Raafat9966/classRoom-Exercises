let wrapper = document.querySelector("#wrapper");
let wrapperChildren = wrapper.children;
console.log(wrapperChildren);
let howMany = [...wrapperChildren];
howMany.forEach((val) => console.log(val.children, val.childElementCount));
console.log(howMany.length);

console.log(howMany.sort((a, b) => b.classList.length - a.classList.length)[0]);
