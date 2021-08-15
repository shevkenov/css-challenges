const toggleMenu = document.querySelector('.toggle-menu');
const navigation = document.querySelector('.navigation');

toggleMenu.onclick = function() {
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active')
}