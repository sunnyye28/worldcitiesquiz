//script to run getAnswers function when the 'check your answers' button is clicked.
//script to check user entered answers against solutions

document.getElementById('check-button').onclick = function(){
		var answers = [];
		for (var i=0; i<questionsList.length; i+=1){
			answers[i] = document.getElementById('answer'+i).value;
		}
		console.log('User entered answers: ' + answers);

		var numberCorrect = 0;
		var numberIncorrect = 0;
		var questionsAnsweredCorrect = [];
		var questionsAnsweredIncorrect = [];

		//note: .trim() removes the white space after a string
		for (var i=0; i<questionsList.length; i+=1){
			if (answers[i].toLowerCase().trim() === solutions[i]){
				numberCorrect += 1;
				questionsAnsweredCorrect.push(i+1);
			} else if (answers[i].toLowerCase().trim() != solutions[i]){
				numberIncorrect += 1;
				questionsAnsweredIncorrect.push(i+1); 
			}
		}	
		alert("You got " + numberCorrect + " questions correct and " + numberIncorrect + " questions wrong.");
		alert('Questions you answered correctly: ' + questionsAnsweredCorrect.join());
		if (questionsAnsweredIncorrect.length != 0){
			alert('Questions you answered incorrectly: ' + questionsAnsweredIncorrect.join());
		}
}