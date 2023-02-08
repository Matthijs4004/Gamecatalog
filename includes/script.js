function navigation( game , nav) 
{
    let containers = document.querySelectorAll( '.container' )
    for (const element of containers ) {
        element.classList.add('hide') 
    }
    let container = document.querySelector( '.' + game )
    container.classList.remove('hide') 
    
    let navigationElements = document.querySelectorAll( '.games a' )
    for (const element of navigationElements ) {
        element.classList.remove('active') 
    }
    nav.classList.add('active')
}