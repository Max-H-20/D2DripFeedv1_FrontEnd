// Your Left Sidebar
const menuItems = document.querySelectorAll('.menu-item');

//Messages
const messagesNotification = document.querySelector('#message-notifs');
const messages = document.querySelector('.messages');

//Search bar in messages
const message = messages.querySelectorAll('.message');
const MessageSearch = document.querySelector('#message-search');

//Themes
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-font-size span');
var root = document.querySelector(':root');
const colorPallete = document.querySelectorAll('.choose-colors span');
const bgtheme1 = document.querySelector('.theme-1');
const bgtheme2 = document.querySelector('.theme-2');
const bgtheme3 = document.querySelector('.theme-3');

//Sidebar
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifs'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifs .notif-count').style.display = 'none';
        }
    })
})


messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notif-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000); //this shows the glow for 2000 ms
})


const SearchMessage = () => {
    const val = MessageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })

}
MessageSearch.addEventListener('keyup', SearchMessage);

// Theme - Card
const openThemeModel = () => {
    themeModel.style.display = 'grid';
}
const closeThemeModel = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModel.style.display = 'none';
    }
}
themeModel.addEventListener('click', closeThemeModel);
theme.addEventListener('click', openThemeModel);

// Theme - Font Sizes
// removes active class from spans or the font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
         } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
         } else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
         } else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
         } else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
         }
     // this will change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;
    })
})

//remove the active class from the primary colors
const changeActiveColorClass = () => {
    colorPallete.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
//changes the primary colors
colorPallete.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        } else if(color.classList.contains('color-6')){
            primaryHue = 23;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

// for the background theme
let lightcolorlightness;
let whitecolorlightness;
let darkcolorlightness;

// this changes the background theme
const changebgtheme = () => {
    root.style.setProperty('--light-color-lightness', lightcolorlightness);
    root.style.setProperty('--white-color-lightness', whitecolorlightness);
    root.style.setProperty('--dark-color-lightness', darkcolorlightness);
    
}
bgtheme1.addEventListener('click', () => {
    // this adds the active class
    bgtheme1.classList.add('active');

    // this removes the active class
    bgtheme2.classList.remove('active');
    bgtheme3.classList.remove('active');
    
    // this removes the custom changes from the local storage(very important)
   window.location.reload();
})
bgtheme2.addEventListener('click', () => {
    darkcolorlightness = '95%';
    whitecolorlightness = '20%';
    lightcolorlightness = '15%';

    // this adds the active class
    bgtheme2.classList.add('active');

    // this removes the active class
    bgtheme1.classList.remove('active');
    bgtheme3.classList.remove('active');
    changebgtheme();
})
bgtheme3.addEventListener('click', () => {
    darkcolorlightness = '95%';
    whitecolorlightness = '10%';
    lightcolorlightness = '0%';

    // this adds the active class
    bgtheme3.classList.add('active');

    // this removes the active class
    bgtheme2.classList.remove('active');
    bgtheme3.classList.remove('active');
    changebgtheme();
})




