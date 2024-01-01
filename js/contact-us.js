const contactUsFormName = document.querySelector('.contact-us__form-name');
const contactUsFormEmail = document.querySelector('.contact-us__form-email');
const contactUsFormText = document.querySelector('.contact-us__form-text');
const contactUsFormBtnLink = document.querySelector('.contact-us__form-btn-link')

const successAudio = new Audio('../sounds/success-1-6297.mp3')
const failAudio = new Audio('../sounds/error-when-entering-the-game-menu-132111.mp3')



function clearInputs(){
    contactUsFormName.value ='';
    contactUsFormEmail.value ='';
    contactUsFormText.value ='';
}

contactUsFormBtnLink.addEventListener('click',()=>{
    let emailValue =contactUsFormEmail.value;
    let str = 'ali@gmail.om'
    let emailRegexPattern =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    let regexResult = emailRegexPattern.test(emailValue)
    //!
    if( contactUsFormName.value.length >= 3 && regexResult !==false && contactUsFormText.value.length > 4){
        successAudio.play()
        iziToast.show({
            iconUrl: '../icons/emojiLaugh.svg',
            icon:'',
            position:'topRight',
            timeout:'5000',
            messageSize:'20',
            pauseOnHover:'true',
            backgroundColor:'green',
            messageColor:'#fff',
            progressBar:'true',
            message: 'پیام شما با موفقیت ارسال شد با تشکر',
        });
        clearInputs()
    }else{
        failAudio.play()
        iziToast.show({
            iconUrl: '../icons/emojiUpset.svg',
            icon:'',
            position:'topRight',
            timeout:'5000',
            messageSize:'20',
            pauseOnHover:'true',
            backgroundColor:'red',
            messageColor:'#fff',
            progressBar:'true',
            message: 'لطفا فیلدهای خالی را پر کنید  ',
        });
    }
})








