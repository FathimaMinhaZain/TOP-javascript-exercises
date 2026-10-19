const input = document.querySelector("input")
const btn = document.querySelector("button")
const ul = document.querySelector("ul")



btn.addEventListener ('click', (e)=>{
    e.preventDefault();
    const item = input.value;
    input.value = '';
    // li span btn
    const li = document.createElement('li')
    const span = document.createElement('span')
    const btn2 = document.createElement('button')

    li.appendChild(span);
    span.textContent = item;

    li.appendChild(btn2);
    btn2.textContent = 'delete'

    ul.appendChild(li);

    btn2.addEventListener('click', ()=> ul.removeChild(li));

    input.focus();
})