//Ստեղծենք նկարների զանգված,տանք սկզբնական արժեք զանգվածի ինդեքսին

let images = ['./images/pepper-1.jpg', './images/food-2.jpg', './images/olive-3.jpg', './images/paprika-4.jpg']
let i = 0
order.innerText = `${i+1} / ${images.length}` //ստանում ենք դինամիկ ցուցիչ 1/4


/* ul-ի մեջ ավելացնում ենք կետերը, items-ի մեջ ավելացնում ենք ներքևի նկարները */ // $ տեքստի մեջ փոփոխվող ${n},  ${images[n]} դինամիկ արժեք,ընդունում է 0-ից մինչև images.length
for(let n = 0; n < images.length; n++){
    dots.innerHTML += `
        <li onclick='setImg(${n})'></li>   
    `

    items.innerHTML += `
        <img onclick='setImg(${n})' src='${images[n]}'>
    `
}
/******************Սլայդի կառուցում և ակտիվացում******************************** */

function switchSlide(value){

    if(value == 'left'){
        i--
        if(i < 0) i = images.length - 1
    }else{
        i++
        if(i == images.length) i = 0
    }

    slider.style.backgroundImage = `url(${images[i]})`     // $ տեքստի մեջ փոփոխվող դինամիկ արժեք,սլայդերը սկսում է աշխատել ֆ-ի շնորհիվ,ստանալով images զանգվածի արժեքները, i արգումենտով 
    order.innerText = `${i+1} / ${images.length}`           // դինամիկ ցուցիչը  1/4 կատարում է իր ֆունկցիան ,i արգումենտով 

    /* Ստանում ենք կետերը, բոլորից ջնջում ենք activeDot կլասը։ Հետո տվյալ կետին ավելացնում ենք activeDot կլասը։ */
        let liItems = document.querySelectorAll('li')
        liItems.forEach(li => li.classList.remove('activeDot'))
        liItems[i].classList.add('activeDot')
    /*************************************************************************************************** */

    /* Ստանում ենք նկարները, բոլորից ջնջում ենք active կլասը։ Հետո տվյալ նկարին ավելացնում ենք active կլասը։ */
        let imgItems = document.querySelectorAll('img')
        imgItems.forEach(img => img.classList.remove('active'))
        imgItems[i].classList.add('active')
    /*************************************************************************************************** */
}
   /* ***********onclick ֆունկցիայի ստեղծում և կիրառում************** */

function setImg(index){
    slider.style.backgroundImage = `url(${images[index]})` //$ տեքստի մեջ փոփոխվող դինամիկ արժեք,սլայդերը սկսում է աշխատել ֆ-ի շնորհիվ,ստանալով images զանգվածի արժեքները, index արգումենտով
    order.innerText = `${index+1} / ${images.length}`    // դինամիկ ցուցիչը  1/4 կատարում է իր ֆունկցիան ,index արգումենտով 
    
    /* Ստանում ենք կետերը, բոլորից ջնջում ենք activeDot կլասը։ Հետո տվյալ կետին ավելացնում ենք activeDot կլասը։ */
        let liItems = document.querySelectorAll('li')
        liItems.forEach(li => li.classList.remove('activeDot'))
        liItems[index].classList.add('activeDot')
    /*************************************************************************************************** */

    /* Ստանում ենք նկարները, բոլորից ջնջում ենք active կլասը։ Հետո տվյալ նկարին ավելացնում ենք active կլասը։ */
        let imgItems = document.querySelectorAll('img')
        imgItems.forEach(img => img.classList.remove('active'))
        imgItems[index].classList.add('active')
    /*************************************************************************************************** */

    i = index // որ արգումենտների մեջ ստեղծվի կապ
}