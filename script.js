 val = true;
    const navlist = document.querySelector('header ul');
    document.querySelector('#menu').addEventListener('click', () => {
        if (val) {
            navlist.style.display = "flex";
            val = false;
        } else {
            navlist.style.display = "none";
            val = true;
        }
    })
    const themebtn = document.querySelector('#dark');
    themebtn.onclick=()=>{
        document.body.classList.toggle("dark");
        if(document.body.classList.contains('dark')){
            themebtn.innerText="☀︎"
        }else{
            themebtn.innerText="☽"

        }
       
    }