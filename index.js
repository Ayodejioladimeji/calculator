const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const result = document.querySelector(".result");
screen.value=0;


btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        let styles = e.currentTarget.classList;

        if(styles.contains("number")){
           if(screen.value<=0){
               screen.value="";
           }
           if(screen.value===""){
               screen.value="";
           }
           let number = btn.getAttribute("data-num");
           screen.value += number;

           
        }
        else if(styles.contains("equal-to")){
            let value = eval(screen.value);
            screen.value=value;
        }
        else if(styles.contains("clear")){
           screen.value=0;
        }
        else if(styles.contains("on")){
            screen.value=0;
        }
        else if(styles.contains("off")){
            screen.value="";
        }
    })
})