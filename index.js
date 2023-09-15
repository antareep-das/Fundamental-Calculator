let screen = document.getElementById('in_div');
buttons = document.querySelectorAll('button'); /* taking all buttons*/
let screen_value = '';
for(item of buttons)
{
    item.addEventListener('click', (e)=>
    {
        buttonText = e.target.innerText;
        console.log('Button text ix ',buttonText);
       
        if(buttonText=='X')
        {
            buttonText = "*";
            screen_value += buttonText;
            screen.value = screen_value;
        }
        else if(buttonText=='C')
        {
            screen_value = ''
            screen.value = screen_value;
        }
        else if(buttonText=='=')
        {
            screen.value = eval(screen_value);
        }
        else
        {
            screen_value += buttonText;
            screen.value = screen_value;
        }
    })
}