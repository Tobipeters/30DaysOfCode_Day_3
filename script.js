let textOne = document.getElementById('text-one');
let textTwo = document.getElementById('text-two');
let error = document.getElementById('error');



//function for calculating BMI value 
calculateBmi = () => {
    let heightValue = document.getElementById('height_value').value;
    let weightValue = document.getElementById('weight_value').value;
    let heightUnit = document.getElementById('height_unit').value;
    let weightUnit = document.getElementById('weight_unit').value;
    let age = document.getElementById('age');
    let gender = document.getElementById('gender');
    let title = document.getElementById('title');
    let textOne = document.getElementById('text-one');
    let textTwo = document.getElementById('text-two');
    let body = document.getElementById('body');
    let button = document.getElementById('btn');
    let subTitle = document.getElementById('sub-title');
    let result;
    let bmiResult = document.getElementById('result');

    let inMeter = heightValue / 100;
    inMeter = inMeter * inMeter
    if (weightUnit === 'ib') {
        inKg = weightValue * 0.453592
        // console.log(inKg)
        result = inKg / inMeter
        // console.log(result)
        result = result.toFixed(2)
    } else if (weightUnit === 'kg') {
        result = weightValue / inMeter
        result = result.toFixed(2)
        // console.log(result)
    }
    title.innerHTML = ''
    textOne.innerHTML = 'YOUR RESULT';
    bmiResult.innerHTML = result;

    emptyInputError();
    if (weightValue !== '' && heightValue !== '') {
        if (result < 18.5) {
            textTwo.innerHTML = 'YOU\'RE UNDERWEIGHT'

             // page style when underweight

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
        else if (result < 25) {
            textTwo.innerHTML = 'YOU\'RE HEALTHY IN WEIGHT'

            // page style when healthy in weight 

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
        else if (result < 30) {
            textTwo.innerHTML = 'YOU\'RE OVERWEIGHT'

            // page style when Overweight

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
        else if (result > 30) {
            textTwo.innerHTML = 'YOU\'RE OBESE'

             // page style when Obese

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
    } else {
        emptyInputError();
    }

    subTitle.innerHTML = 'BMI CALCULATOR'
}

//Error pop up if input fields are empty
emptyInputError = () => {

    let heightValue = document.getElementById('height_value').value;
    let weightValue = document.getElementById('weight_value').value;
    let subTitle = document.getElementById('sub-title');
    let textOne = document.getElementById('text-one');
    let textTwo = document.getElementById('text-two');
    let bmiResult = document.getElementById('result');
    let error = document.getElementById('error');
    let button = document.getElementById('btn');
    if (heightValue === '' || weightValue === '') {
        subTitle.innerHTML = '';
        title.innerHTML = ''
        textOne.innerHTML = '';
        bmiResult.innerHTML = '';
        textTwo.innerHTML = '';
        error.innerHTML = 'Enter your height and weight values'
        //Make Error message visible
        error.style.display = 'block'

        //After Error logs it displays the default page style

        body.style.backgroundColor = '#F6F6F6';
        body.style.color = '#000';
        age.style.color = '#000';
        gender.style.color = '#000';
        document.getElementById('height_unit').style.color = '#000'
        document.getElementById('height_value').style.color = '#000'
        document.getElementById('weight_value').style.color = '#000'
        document.getElementById('weight_unit').style.color = '#000'

        age.style.borderColor = '#000'
        gender.style.borderColor = '#000'
        document.getElementById('height_unit').style.borderColor = '#ff0c00c9';
        document.getElementById('height_value').style.borderColor = '#ff0c00c9';
        document.getElementById('weight_value').style.borderColor = '#ff0c00c9';
        document.getElementById('weight_unit').style.borderColor = '#ff0c00c9';


        document.getElementById('height_unit').style.backgroundColor = '#F6F6F6';
        document.getElementById('height_value').style.backgroundColor = '#F6F6F6';
        document.getElementById('weight_value').style.backgroundColor = '#F6F6F6';
        document.getElementById('weight_unit').style.backgroundColor = '#F6F6F6';

        age.style.backgroundColor = '#F6F6F6';
        gender.style.backgroundColor = '#F6F6F6';
        button.style.backgroundColor = '#F6F6F6';
        button.style.color = '#000'
    } else {
        error.style.display = 'none'
    }
    return;
}

