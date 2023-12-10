
const panels = document.querySelectorAll(".panel");
const stars = document.querySelectorAll(".star")

panels.forEach(panel =>{

    panel.addEventListener('click', () =>{
        removeActiveClass ();
   panel.classList.add('active');

    })
})

function removeActiveClass(){
    panels.forEach(panel => {
        panel.classList.remove('active')
     } ) 
};

