
if (document.readyState != 'loading') {
	var flag_email = false;
	var flag_adress = false;
	var orientation_NSL = "center";
	var orientaton_job = "center";
	var color_NSL = "#202020";
	var color_job = "#202020"
	var size_NSL = "26px";
	var size_job = "16px";

    const content__detail_in_card = document.querySelector(".block__set_detail_in_card");
    const visual__fields = document.querySelectorAll(".field__visual_card");
	
	apply_btn.addEventListener("click", () => {
		var information_of_detailing = content__detail_in_card.querySelectorAll("input");
		
		for(var i = 0; i < 2; i++){
			if(information_of_detailing[i].value === ""){
				alert("Проверьте поля.\n Пустыми не должны быть: \n \t Наименование компании \n \t Фамилия, Имя, Отчество\n \t Должность \n Остальные могут быть пустыми ;)");
				return;
			}
		}

		for(var i = 2; i < 5; i++){
			if(information_of_detailing[i].checked){
				orientation_NSL = information_of_detailing[i].value;
				break;
			}
		}

		for(var i = 5; i < 8; i++){
			if(information_of_detailing[i].checked){
				size_NSL = information_of_detailing[i].value;
				break;
			}
		}

		for(var i = 8; i < 14; i++){
			if(information_of_detailing[i].checked){
				color_NSL = information_of_detailing[i].value;
				break;
			}
		}

		for(var i = 15; i < 18; i++){
			if(information_of_detailing[i].checked){
				orientation_job = information_of_detailing[i].value;
				break;
			}
		}

		for(var i = 18; i < 21; i++){
			if(information_of_detailing[i].checked){
				size_job = information_of_detailing[i].value;
				break;
			}
		}
		
		for(var i = 21; i < 27; i++){
			if(information_of_detailing[i].checked){
				color_job = information_of_detailing[i].value;
				break;
			}
		}

		if(information_of_detailing[31].checked){
			flag_email = true;
		}

		if(information_of_detailing[33].checked){
			flag_adress = true
		}


		visual__fields[0].textContent = information_of_detailing[0].value;

		visual__fields[1].textContent = information_of_detailing[1].value;
		visual__fields[1].style.textAlign = orientation_NSL;
		visual__fields[1].style.fontSize = size_NSL;
		visual__fields[1].style.color = color_NSL;
		
		visual__fields[2].textContent = information_of_detailing[14].value;
		visual__fields[2].style.textAlign = orientation_job;
		visual__fields[2].style.fontSize = size_job;
		visual__fields[2].style.color = color_job;

		visual__fields[3].textContent = information_of_detailing[27].value;
		
		visual__fields[4].textContent = information_of_detailing[28].value;
		
		if(flag_email){
			visual__fields[5].style.display = "block";
			visual__fields[5].textContent = information_of_detailing[30].value;
		}else{
			visual__fields[5].style.display = "none";
		}

		if(flag_adress){
			visual__fields[6].style.display = "block";
			visual__fields[6].textContent = information_of_detailing[32].value;
		}else{
			visual__fields[6].style.display = "none";
		}



		
	});


	const checkbox_addphone = document.querySelector("#is2phone");
	
	const phone_text = document.querySelector("#seCphone");
	checkbox_addphone.addEventListener('change', (event) => {
  		if (event.currentTarget.checked) {
    		phone_text.style.display = "block";
    		document.querySelector("#is2phone + label").style.fontSize = "0";
  		} else {
    		phone_text.style.display = "none";
    		phone_text.value = "";
    		document.querySelector("#is2phone + label").style.fontSize = "12px";
    			
  		}
	});

}	
