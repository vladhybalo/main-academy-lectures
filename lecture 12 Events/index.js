// for(let elem of document.querySelectorAll('.border')) {
//     elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`),{
//         capture: true
//     } );
//     elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
//   }

document.querySelector('.container')
    .addEventListener('click', (event) => {
        console.log(event)
        // if('btn' in event.target.dataset){
        //     event.target.classList.toggle('clicked')
        // }
        const btn = event.target.closest('button');

        if(btn) {
            btn.classList.toggle('clicked')
        }

        console.log(event.currentTarget)

        // preudo code, closest emulation
        // let target = event.target;

        // while(target !== null) {
        //     if(target.nodeName === 'BUTTON') { 
        //         btn.classList.toggle('clicked')
        //         break;
        //     } else {
        //         target = target.parent;
        //     }
        // }
    })

    document.getElementById('saveData')
        .addEventListener('click', (event) => {
            console.log('button!');
            event.stopPropagation();
        });

    document.querySelector('.widget')
        .addEventListener('click', () => {
            console.log('widget!')
        })

    document.getElementById('googleLink')
        .addEventListener('click', (e) => {
            if(confirm('Leaving?')) {
                //say good bye
            } else {
                e.preventDefault();
            }
        });

    document.querySelector('input')
        .addEventListener('input', (e) => {
            console.log(e.target.value);

            const products = document.querySelector('.products').children;
        
            for (let i = 0; i < products.length; i++) {
                if(products[i].innerText.toLowerCase().indexOf(e.target.value) === 0) {
                    products[i].hidden = false;
                } else {
                    products[i].hidden = true;
                }
            }
        });