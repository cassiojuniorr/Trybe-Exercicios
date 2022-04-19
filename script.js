function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

    let dList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let uls = document.getElementById("days");
    
    function dias(){
        
        for (let index = 0; index <= dList.length -1; index++){
            let lis = document.createElement("li");
            lis.innerHTML = dList[index];
            lis.classList.add("days");   
            if(dList[index] == 24 || dList[index] == 31){
                lis.classList.add("holiday");
            } else if(dList[index] == 4 || dList[index] == 11 || dList[index] == 18){
                lis.classList.add("friday");
            } else if (dList[index] == 25){
                lis.classList.add("holiday");
                lis.classList.add("friday");
            }
            uls.appendChild(lis); 
        }   
    }
    dias();

    let feriados = document.getElementsByClassName("holiday");
    function fer(Feriados){
        let but = document.createElement("button");
        but.id = 'btn-holiday';
        but.innerHTML = 'Feriados';
        let dC = document.querySelectorAll("div.buttons-container")[0];
        dC.appendChild(but);
        
    }
    fer();

    
    function makeBu1(){
        let buttHoli = document.getElementById("btn-holiday");
        let colorBack = 'rgb(238,238,238)';
        let colorNew = 'white';
        buttHoli.addEventListener("click", cColor);
        function cColor(){
            for (let i = 0; i < buttHoli.length; i++){
                if(feriados[i].style.backgroundcolor == colorNew){
                    feriados[i].style.backgroundcolor = colorBack;
                } else {
                    feriados[i].style.backgroundcolor = colorNew; 
                }
            }
        }
    }
    makeBu1();


    function sex(){
        let but2 = document.createElement("button");
        but2.innerHTML = 'Sexta-feira';
        but2.id = 'btn-friday';
        let dC = document.querySelectorAll("div.buttons-container")[0];
        dC.appendChild(but2);
    }
    sex();

        let buttFry = document.getElementById("btn-friday");
        buttFry.addEventListener("click",tSex);
        let daysSex = [4, 11, 18, 25]
        function tSex(){
            let sexs = document.getElementsByClassName("friday");
            let newSext = 'SEXTOU o/';
            for (let i = 0; i < sexs.length; i++){ 
                if (sexs[i].innerHTML !== newSext){
                    sexs[i].innerHTML = newSext;
                } else {
                    sexs[i].innerHTML = daysSex[i];
                } 
            }
        }
        tSex();
    



