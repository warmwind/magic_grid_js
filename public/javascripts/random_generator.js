var images = ['1', '2', '3', '6', '7', '8']
var people = {
	'1': '1',
	'2': '2',
	'3': '3',
	'6': '6',
	'7': '7',
	'8': '8'
	}

function RandomGenerator(){
}

RandomGenerator.generateCondition = function(content){
	var randomnumber = generateNumberWithin(content.length)
	return content[randomnumber]
}


RandomGenerator.generateContent = function(size){
	var result = new Array()
	var candidateArray  = RandomGenerator.generateCandidateContent(3)
	for (var i = 0; i < size * size; i++) {
		var randomnumber = generateNumberWithin(3)
		result.push(candidateArray[randomnumber])
	}
	return result
}

RandomGenerator.generateCandidateContent = function(size){
	var result = new Array()
	for(var i = 0; i < size; i++){
		var randomnumber = generateNumberWithin(images.length)
		result.push(images[randomnumber])
	}
	return result
}

function generateNumberWithin(size){
	return Math.floor(Math.random() * size)
}


