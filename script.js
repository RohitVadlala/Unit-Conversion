document.getElementById('convertBtn').addEventListener('click', function() {
    let value = parseFloat(document.getElementById('inputValue').value);

    if (isNaN(value)) {
        alert("Please enter a valid number");
        return;
    }

    // Length conversion (Meters to Feet and Feet to Meters)
    let metersToFeet = (value * 3.28084).toFixed(3);
    let feetToMeters = (value / 3.28084).toFixed(3);

    // Volume conversion (Liters to Gallons and Gallons to Liters)
    let litersToGallons = (value * 0.264172).toFixed(3);
    let gallonsToLiters = (value / 0.264172).toFixed(3);

    // Mass conversion (Kilograms to Pounds and Pounds to Kilograms)
    let kilosToPounds = (value * 2.20462).toFixed(3);
    let poundsToKilos = (value / 2.20462).toFixed(3);

    // Update the DOM with results
    document.getElementById('lengthResult').innerText = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;
    document.getElementById('volumeResult').innerText = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;
    document.getElementById('massResult').innerText = `${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos`;
});
