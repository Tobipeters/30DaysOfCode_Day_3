var textOne = document.getElementById('text-one');
var textTwo = document.getElementById('text-two');

//function for calculating BMI value 
calculateBmi = () =>{
    let heightValue = document.getElementById('height_value').value;
    let weightValue = document.getElementById('weight_value').value;
    let heightUnit = document.getElementById('height_unit').value;
    let weightUnit = document.getElementById('weight_unit').value;
    let age = document.getElementById('age');
    let gender = document.getElementById('gender');
    var title = document.getElementById('title');
    let textOne = document.getElementById('text-one');
    let textTwo = document.getElementById('text-two');
    var body = document.getElementById('body');
    var button = document.getElementById('btn');
    var subTitle = document.getElementById('sub-title');
    var result;
    var bmiResult = document.getElementById('result');

    let inMeter = heightValue / 100;
    inMeter = inMeter * inMeter
    if (weightUnit === 'ib') {
        inKg = weightValue * 0.453592 
        console.log(inKg)
        result = inKg / inMeter
        console.log(result)
    result = result.toFixed(2)
    } else if (weightUnit === 'kg'){
        result = weightValue / inMeter
        result = result.toFixed(2)
        console.log(result)
    }
    title.innerHTML = ''
    textOne.innerHTML = 'YOUR RESULT';
    bmiResult.innerHTML = result;
 
emptyInputError();

    if (result < 18.5) {
        textTwo.innerHTML = 'YOU\'RE UNDERWEIGHT'

        body.style.backgroundColor = '#87B1E2';
        body.style.color = '#fff'
        age.style.color = '#fff'
        gender.style.color = '#fff'
        document.getElementById('height_unit').style.color = '#fff';
        document.getElementById('height_value').style.color = '#fff';
        document.getElementById('weight_value').style.color = '#fff';
        document.getElementById('weight_unit').style.color = '#fff';

        age.style.borderColor = '#fff'
        gender.style.borderColor = '#fff'
        document.getElementById('height_unit').style.borderColor = '#fff';
        document.getElementById('height_value').style.borderColor = '#fff';
        document.getElementById('weight_value').style.borderColor = '#fff';
        document.getElementById('weight_unit').style.borderColor = '#fff';


        document.getElementById('height_unit').style.backgroundColor = '#87B1E2';
        document.getElementById('height_value').style.backgroundColor = '#87B1E2';
        document.getElementById('weight_value').style.backgroundColor = '#87B1E2';
        document.getElementById('weight_unit').style.backgroundColor = '#87B1E2';

        age.style.backgroundColor = '#87B1E2';
        gender.style.backgroundColor = '#87B1E2';
        button.style.backgroundColor = '#fff'
        button.style.color = '#000'
    }
    else if (result < 25){
        textTwo.innerHTML = 'YOU\'RE HEALTHY IN WEIGHT'

        body.style.backgroundColor = '#C1E999';
        body.style.color = '#000'
        age.style.color = '#000'
        gender.style.color = '#000'
        document.getElementById('height_unit').style.color = '#000';
        document.getElementById('height_value').style.color = '#000';
        document.getElementById('weight_value').style.color = '#000';
        document.getElementById('weight_unit').style.color = '#000';

        age.style.borderColor = '#000'
        gender.style.borderColor = '#000'
        document.getElementById('height_unit').style.borderColor = '#000';
        document.getElementById('height_value').style.borderColor = '#000';
        document.getElementById('weight_value').style.borderColor = '#000';
        document.getElementById('weight_unit').style.borderColor = '#000';

        document.getElementById('height_unit').style.backgroundColor = '#C1E999';
        document.getElementById('height_value').style.backgroundColor = '#C1E999';
        document.getElementById('weight_value').style.backgroundColor = '#C1E999';
        document.getElementById('weight_unit').style.backgroundColor = '#C1E999';
        age.style.backgroundColor = '#C1E999';
        gender.style.backgroundColor = '#C1E999';
        button.style.backgroundColor = '#fff'
        button.style.color = '#000'
    }
    else if (result < 30){
        textTwo.innerHTML = 'YOU\'RE OVERWEIGHT'

        body.style.backgroundColor = '#F9E58C';
        body.style.color = '#000'
        age.style.color = '#000'
        gender.style.color = '#000'
        document.getElementById('height_unit').style.color = '#000';
        document.getElementById('height_value').style.color = '#000';
        document.getElementById('weight_value').style.color = '#000';
        document.getElementById('weight_unit').style.color = '#000';

        age.style.borderColor = '#000'
        gender.style.borderColor = '#000'
        document.getElementById('height_unit').style.borderColor = '#000';
        document.getElementById('height_value').style.borderColor = '#000';
        document.getElementById('weight_value').style.borderColor = '#000';
        document.getElementById('weight_unit').style.borderColor = '#000';

        document.getElementById('height_unit').style.backgroundColor = '#F9E58C';
        document.getElementById('height_value').style.backgroundColor = '#F9E58C';
        document.getElementById('weight_value').style.backgroundColor = '#F9E58C';
        document.getElementById('weight_unit').style.backgroundColor = '#F9E58C';
        age.style.backgroundColor = '#F9E58C';
        gender.style.backgroundColor = '#F9E58C';
        button.style.backgroundColor = '#fff'
        button.style.color = '#000'
    }
    else if (result < 40){
        textTwo.innerHTML = 'YOU\'RE OBESE'

        body.style.backgroundColor = '#F38B8C';
        body.style.color = '#fff'
        age.style.color = '#fff'
        gender.style.color = '#fff'
        document.getElementById('height_unit').style.color = '#fff';
        document.getElementById('height_value').style.color = '#fff';
        document.getElementById('weight_value').style.color = '#fff';
        document.getElementById('weight_unit').style.color = '#fff';

        age.style.borderColor = '#fff'
        gender.style.borderColor = '#fff'
        document.getElementById('height_unit').style.borderColor = '#fff';
        document.getElementById('height_value').style.borderColor = '#fff';
        document.getElementById('weight_value').style.borderColor = '#fff';
        document.getElementById('weight_unit').style.borderColor = '#fff';


        document.getElementById('height_unit').style.backgroundColor = '#F38B8C';
        document.getElementById('height_value').style.backgroundColor = '#F38B8C';
        document.getElementById('weight_value').style.backgroundColor = '#F38B8C';
        document.getElementById('weight_unit').style.backgroundColor = '#F38B8C';

        age.style.backgroundColor = '#F38B8C';
        gender.style.backgroundColor = '#F38B8C';
        button.style.backgroundColor = '#fff'
        button.style.color = '#000'
    }
    subTitle.innerHTML = 'BMI CALCULATOR'
}

//Error pop up if inpt fields are empty
emptyInputError = () =>{
    var subTitle = document.getElementById('sub-title');
    subTitle.innerHTML = '';
}

