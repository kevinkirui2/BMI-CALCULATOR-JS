const name1 = document.querySelector('.name');
const height = document.querySelector('.height'); 
const weight = document.querySelector('.weight'); 

function bmiCalculator() {
  const heightValue = parseFloat(height.value); 
  const weightValue = parseFloat(weight.value); 

  if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0) {
    document.querySelector('.answer').textContent = "Invalid input";
    return;
  }

  const heightInMeters = heightValue / 100;

  // BMI formula
  const bmi = weightValue / (heightInMeters ** 2);


  if (bmi < 18.5) {
    document.querySelector('.final').textContent = `${name1.value}, you are underweight ${bmi.toFixed(4)}`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.querySelector('.final').textContent = `${name1.value}, you are normal ${bmi.toFixed(2)}`;
  } else {
    document.querySelector('.final').textContent = `${name1.value}, you are overweight ${bmi.toFixed(2)}`;
  }
}
