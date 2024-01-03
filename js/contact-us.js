// !Elements Variable
const contactUsFormName = document.querySelector('.contact-us__form-name');
const contactUsFormEmail = document.querySelector('.contact-us__form-email');
const contactUsFormText = document.querySelector('.contact-us__form-text');
const contactUsFormBtnLink = document.querySelector('.contact-us__form-btn-link')
//!
const successAudio =document.querySelector('.sound-success')
const failAudio =document.querySelector('.sound-error') 
//!
const emojiLaugh = '../icons/emojiLaugh.svg'
const emojiUpset = '../icons/EmojiUpset.svg'
//!

//! Fucntion For Clear Input after Successfully submit
function clearInputs(){
    contactUsFormName.value ='';
    contactUsFormEmail.value ='';
    contactUsFormText.value ='';
}

// ! Click Event For Control Form Validation
contactUsFormBtnLink.addEventListener('click',()=>{
    let emailValue =contactUsFormEmail.value;
    let str = 'ali@gmail.om'
    let emailRegexPattern =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    let regexResult = emailRegexPattern.test(emailValue)
    //!
    if( contactUsFormName.value.length >= 3 && regexResult !==false && contactUsFormText.value.length > 4){
        successAudio.play()
        iziToast.show({
            icon:"lnr lnr-smile",
            iconColor:'#fff',
            position:'topRight',
            timeout:'5000',
            messageSize:'20',
            pauseOnHover:'true',
            backgroundColor:'green',
            messageColor:'#fff',
            progressBar:'true',
            message: 'Your Message Has Been Successfully sent, Thank You',
        });
        clearInputs()
    }else{
        failAudio.play()
        iziToast.show({
            position:'topRight',
            icon: "lnr lnr-sad",
            iconColor:'#fff',
            timeout:'5000',
            messageSize:'20',
            pauseOnHover:'true',
            backgroundColor:'red',
            messageColor:'#fff',
            progressBar:'true',
            message: 'Please Fill In The Blank Fields',
        });
    }
})


// //!  Sweet Alert 2 Logic
Swal.fire({
    title: 'توجه',
    text:'در این صفحه از کتابخانه iziToast و اعتبارسنجی فرم استفاده شده است ',
    icon: 'info',
    animation:true,
    backdrop:true,
    iconColor:'#e50914',
    textDirection: "rtl",
    background:'#0d0c11',
    confirmButtonText: 'متوجه شدم',
    confirmButtonColor:'#e50914',
    focusConfirm:true,
  })
  
