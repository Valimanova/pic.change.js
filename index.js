let img= document.querySelector('.img-santorini,img');
console.log(img);
document.querySelectorAll(".col-lg-4").forEach(element=>{
    element.addEventListener("click",function(change){
     img.innerHTML= element.innerHTML
     element.innerHTML= img.innerHTML
     change()
    })
}) 
function bigImg(item){
 item.style.height='600px'
 item.style.witdh='800px'
}
function nImg(x){
    x.style.height='400px'
    x.style.witdh="700px"
}