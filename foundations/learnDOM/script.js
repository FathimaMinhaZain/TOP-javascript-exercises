const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement('p');
para.textContent = "hi, im red"
para.style.color = 'red';

container.appendChild(para);

// an <h3> with blue text that says “I’m a blue h3!”

const blue = document.createElement('h3');
blue.textContent = 'I’m a blue h3!';
blue.style.color = 'blue';

container.appendChild(blue);

// a <div> with a black border and pink background color with the following elements inside of it:
//     another <h1> that says “I’m in a div”
//     a <p> that says “ME TOO!”
//     Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const div = document.createElement('div');
div.setAttribute('style', "border: solid black; background-color: pink; ")

const h1InDiv = document.createElement('h1')
h1InDiv.textContent = "I’m in a div";

const p = document.createElement('p')
p.textContent = "ME TOO!";

div.appendChild(h1InDiv);
div.appendChild(p);

container.appendChild(div);


const button = document.querySelector('#btn');

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});




