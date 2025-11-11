document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let category = '';

        if (bmi < 18.5) {
            category = 'น้ำหนักน้อย';
        } else if (bmi < 24.9) {
            category = 'น้ำหนักปกติ';
        } else if (bmi < 29.9) {
            category = 'น้ำหนักเกิน';
        } else {
            category = 'โรคอ้วน';
        }

        document.getElementById('result').textContent = `ค่า BMI ของคุณคือ ${bmi} (${category})`;
    } else {
        document.getElementById('result').textContent = 'กรุณากรอกน้ำหนักและส่วนสูงให้ถูกต้อง';
    }
});