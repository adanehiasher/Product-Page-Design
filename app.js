let productImg = document.getElementById("productImg");
let btns = document.querySelectorAll(".btn");


btns[0].onclick = function (){
    productImg.src = "img/image1.png"

    for (btn of btns){
        btn.classList.remove("active")
    }
    this.classList.add('active')
}


btns[1].onclick = function (){
    productImg.src = "img/image2.png"

    for (btn of btns){
        btn.classList.remove("active")
    }
    this.classList.add('active')
}


btns[2].onclick = function (){
    productImg.src = "img/image3.png"

    for (btn of btns){
        btn.classList.remove("active")
    }
    this.classList.add('active')
}

