const items = document.querySelectorAll(".ads");
const heading = document.querySelectorAll(".anim");


items.forEach(item => 
    item.addEventListener('click', () => {
      heading.forEach(heading=>{
            // heading.style.display = 'none'
        })
        const nextEle = item.nextElementSibling
        if(nextEle.style.display === "none"){
           return nextEle.style.display = "flex" 
        }
        else{
           return nextEle.style.display = "none"

        }
        

    })
)
function carousel(){
   const element = document.querySelector(".mouse")
   element.style.transform = "translatex(100px)"
   element.style.transform = " transition ease-in-out duration-700"
}
function carousel2(){
    const element = document.querySelector(".mouse")
    element.style.transform = "translatex(-100px)"
    element.style.transform = " transition ease-in-out duration-700"
 }
 function toogle() {
   const mobile = document.querySelector('.home')
   mobile.classList.contains("-top-full")
     ? mobile.classList.replace("-top-full", 'top-[80px]')
     : mobile.classList.replace("top-[80px]", '-top-full');
}


function changeTheme() {

}