const form = document.getElementById('form');
const height = document.getElementById('height');
const weight = document.getElementById('weight');

//object to inject html dynamically
const htmlObj = {
    underweight: `<h2>Risks associated with being Underweight</h2>
    <ul>
        <li>Malnutrition, vitamin deficiencies, anemia (lowered ability to carry blood vessels)</li>
        <li>Osteoporosis, a disease that causes bone weakness, increasing the risk of breaking a bone</li>
        <li>A decrease in immune function</li>
        <li>Growth and development issues, particularly in children and teenagers</li>
        <li>Possible reproductive issues for women due to hormonal imbalances that can disrupt the menstrual cycle. Underweight women also have a higher chance of miscarriage in the first trimester</li>
        <li>Potential complications as a result of surgery</li>
        <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
    </ul>`,

    normal: `<h2>Advantages associated with being Normal</h2>
    <ul>
        <li>Malnutrition, vitamin deficiencies, anemia (lowered ability to carry blood vessels)</li>
        <li>Osteoporosis, a disease that causes bone weakness, increasing the risk of breaking a bone</li>
        <li>A decrease in immune function</li>
        <li>Growth and development issues, particularly in children and teenagers</li>
        <li>Possible reproductive issues for women due to hormonal imbalances that can disrupt the menstrual cycle. Underweight women also have a higher chance of miscarriage in the first trimester</li>
        <li>Potential complications as a result of surgery</li>
        <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
    </ul>`,

    overweight: `<h2>Risks associated with being Obese</h2>
    <ul>
        <li>High blood pressure</li>
        <li>Higher levels of LDL cholesterol, which is widely considered "bad cholesterol," lower levels of HDL cholesterol, considered to be good cholesterol in moderation, and high levels of triglycerides</li>
        <li>Type II diabetes</li>
        <li>Coronary heart disease</li>
        <li>Stroke</li>
        <li>Gallbladder disease</li>
        <li>Osteoarthritis, a type of joint disease caused by breakdown of joint cartilage</li>
        <li>Sleep apnea and breathing problems</li>
        <li>Certain cancers (endometrial, breast, colon, kidney, gallbladder, liver)</li>
        <li>Low quality of life</li>
        <li>Mental illnesses such as clinical depression, anxiety, and others</li>
        <li>Body pains and difficulty with certain physical functions</li>
        <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
    </ul>`,
    
    obese: `<h2>Risks associated with being Obese</h2>
    <ul>
        <li>High blood pressure</li>
        <li>Higher levels of LDL cholesterol, which is widely considered "bad cholesterol," lower levels of HDL cholesterol, considered to be good cholesterol in moderation, and high levels of triglycerides</li>
        <li>Type II diabetes</li>
        <li>Coronary heart disease</li>
        <li>Stroke</li>
        <li>Gallbladder disease</li>
        <li>Osteoarthritis, a type of joint disease caused by breakdown of joint cartilage</li>
        <li>Sleep apnea and breathing problems</li>
        <li>Certain cancers (endometrial, breast, colon, kidney, gallbladder, liver)</li>
        <li>Low quality of life</li>
        <li>Mental illnesses such as clinical depression, anxiety, and others</li>
        <li>Body pains and difficulty with certain physical functions</li>
        <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
    </ul>`,
    extremeObese: `<h2>Risks associated with being Obese</h2>
    <ul>
        <li>High blood pressure</li>
        <li>Higher levels of LDL cholesterol, which is widely considered "bad cholesterol," lower levels of HDL cholesterol, considered to be good cholesterol in moderation, and high levels of triglycerides</li>
        <li>Type II diabetes</li>
        <li>Coronary heart disease</li>
        <li>Stroke</li>
        <li>Gallbladder disease</li>
        <li>Osteoarthritis, a type of joint disease caused by breakdown of joint cartilage</li>
        <li>Sleep apnea and breathing problems</li>
        <li>Certain cancers (endometrial, breast, colon, kidney, gallbladder, liver)</li>
        <li>Low quality of life</li>
        <li>Mental illnesses such as clinical depression, anxiety, and others</li>
        <li>Body pains and difficulty with certain physical functions</li>
        <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
    </ul>`
}

//add event listener to form submit
form.addEventListener('submit', function(e){
    e.preventDefault();
    bmiCalculate();
})

//set error for invalid inputs
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.info');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

//set succes for valid inputs
const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.info');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

//calculate bmi
function bmiCalculate(){
    const heightLength = height.value.length;
    const weightLength = weight.value.length;
    const weightValue = parseFloat(weight.value.trim());
    const heightValue = parseFloat(height.value.trim());

    //check for valid inputs
    if(weightLength == 0){
        setError(weight, 'This field is required');
    }
    else if(weightValue == 0){
        setError(weight, 'Weight can not be 0');
    }
    else{
        setSuccess(weight);
    }

    if(heightLength == 0){
        setError(height, 'This field is required');
    }
    else if(heightValue == 0){
        setError(height, 'Height can not be 0');
    }
    else{
        setSuccess(height);
    }

    //calculate bmi only if input is valid
    if(weightLength != 0 && weightValue != 0 && heightLength != 0 && heightValue != 0){
        let bmi = ((weightValue / (heightValue * heightValue)) * 10000).toFixed(1);
    
        //empty string (used to append the html content)
        let resultContent = '';

        //underweight
        if(bmi < 18.5 && resultContent == ''){
            resultContent+= `<div class="result-wrapper">
                                <div class="left-column">
                                    <div class="left-col-content">
                                        
                                        <h1>Your BMI is: ${bmi} <br />You are Underweight</h1>
                                        ${htmlObj.underweight}
                                    </div>
                                </div>
                                <div class="right-column">
                                    <img src="./underweight.jpeg" alt="">
                                </div>
                            </div>`

            let resultContainer = document.querySelector('.result-container'); //select element where html is to be added
            resultContainer.innerHTML = resultContent;
        }

        //normal
        else if(bmi >= 18.5 && bmi <= 24.9){
            resultContent+= `<div class="result-wrapper">
                                <div class="left-column">
                                    <div class="left-col-content">
                                        <h1>Your BMI is: ${bmi} <br />You are Normal</h1>
                                        ${htmlObj.normal}
                                    </div>
                                </div>
                                <div class="right-column">
                                    <img src="./normal.jpeg" alt="">
                                </div>
                            </div>`;

            let resultContainer = document.querySelector('.result-container');
            resultContainer.innerHTML = resultContent;
        }

        //overweight
        else if(bmi > 24.9 && bmi <= 29.9){
            resultContent+= `<div class="result-wrapper">
                                <div class="left-column">
                                    <div class="left-col-content">
                                        <h1>Your BMI is: ${bmi} <br />You are Overweight</h1>
                                        ${htmlObj.overweight}
                                    </div>
                                </div>
                                <div class="right-column">
                                    <img src="./overweight.jpeg" alt="">
                                </div>
                            </div>`;

            let resultContainer = document.querySelector('.result-container');
            resultContainer.innerHTML = resultContent;
        }

        //obese
        else if(bmi > 29.9 && bmi <= 34.9){
            resultContent+= `<div class="result-wrapper">
                                <div class="left-column">
                                    <div class="left-col-content">
                                        <h1>Your BMI is: ${bmi} <br />You are Obese</h1>
                                        ${htmlObj.obese}
                                    </div>
                                </div>
                                <div class="right-column">
                                    <img src="./obese.jpeg" alt="">
                                </div>
                            </div>`;

            let resultContainer = document.querySelector('.result-container');
            resultContainer.innerHTML = resultContent;
        }
        
        //extreme obese
        else if(bmi > 34.9){
            resultContent+= `<div class="result-wrapper">
                                <div class="left-column">
                                    <div class="left-col-content">
                                        <h1>Your BMI is: ${bmi} <br />You are Extreme Obese</h1>
                                        ${htmlObj.extremeObese}
                                    </div>
                                </div>
                                <div class="right-column">
                                    <img src="./extreme-obese.jpeg" alt="">
                                </div>
                            </div>`;

            let resultContainer = document.querySelector('.result-container');
            resultContainer.innerHTML = resultContent;
        }
}
}
