var name = "Kotha"
// 1-Converts to uppercase
upper_name = name.toUpperCase()
console.log(upper_name) //prints KOTHA

// 2-Converts to lowercase
lower_name = name.toLowerCase()
console.log(lower_name) //prints kotha

// 3-Convert to titlecase manually:
nameInput = prompt("Enter your name: ");

first_letter = nameInput.slice(0,1);

remaining_letters = nameInput.slice(1); //position 1 to end

first_letter_upper = first_letter.toUpperCase();
remaining_letters_lower = remaining_letters.toLowerCase();

new_name = first_letter_upper + remaining_letters_lower

alert(new_name)