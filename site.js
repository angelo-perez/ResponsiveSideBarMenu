
const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

const menus = Array.from(sidebar.querySelectorAll('ul li')).slice(1); // excludes first li

const submenus = Array.from(document.getElementsByClassName('a-sub-menu'));

document.addEventListener('DOMContentLoaded', function(){
    menus.forEach(m => {
        m.addEventListener('click', function(event){
            resetActiveLinks();
            m.classList.add('is-active');
        });
    });

    submenus.forEach(sm => {
        let submenuItems = sm.querySelectorAll('div > li'); // Get all li elements
        submenuItems.forEach(item => {
            item.addEventListener('click', function(event) {
                setTimeout(() => {
                    document.querySelectorAll('.a-sub-menu li').forEach(li => {
                        li.classList.remove('is-active'); // Remove active from all
                    });
    
                    item.classList.add('is-active'); // Add active class to the clicked item
                    item.closest('li').classList.add('is-active');
                }, 10); // Runs after all event handlers are executed
            });
        });
    });
    

});

function toggleSideBar(){
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');

    closeAllSubMenus();
}

function toggleSubMenu(button){

    if(!button.nextElementSibling.classList.contains('show')){
        closeAllSubMenus();
    }

    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close');
        toggleButton.classList.toggle('rotate');
    }
}

function closeAllSubMenus(){
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate');
    });
}

function resetActiveLinks(){
    menus.forEach(menu => {
        menu.classList.remove('is-active');
    });
}