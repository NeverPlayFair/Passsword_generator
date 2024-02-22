// Class representing a password generator
class PasswordGenerator {
    constructor() {
        // Selecting necessary DOM elements
        this.resultPassword = document.querySelector("#generatedPassword");
        this.clipboardButton = document.querySelector("#copyButton");
        this.length = document.querySelector("#passwordLength");
        this.lengthRange = document.querySelector("#passwordLengthRange");
        this.lowercaseCheckbox = document.querySelector("#includeLowercase");
        this.uppercaseCheckbox = document.querySelector("#includeUppercase");
        this.numbersCheckbox = document.querySelector("#includeNumbers");
        this.symbolsCheckbox = document.querySelector("#includeSymbols");
        this.generateButton = document.querySelector("#generatePasswordButton");
        
        // Initializing the password generator
        this.init();
    }

    // Method to initialize event listeners and update options
    init() {
        document.querySelectorAll(".password-generator input[type='checkbox']")
            .forEach(cb => cb.addEventListener("click", this.updateOptions));
    
        this.generateButton.addEventListener("click", this.generatePassword);
        this.clipboardButton.addEventListener("click", this.copyToClipboard);
    
        this.lengthRange.addEventListener("input", this.rangeLengthChange);
        this.length.addEventListener("input", this.lengthChange);

        this.updateOptions();
    }

    // Method to handle range length change
    rangeLengthChange = () => {
        this.length.value = this.lengthRange.value;
    }

    // Method to handle password length change
    lengthChange = () => {
        this.lengthRange.value = this.length.value;
    }

    // Method to update options based on checkbox states
    updateOptions = () => {
        const optionMethods = [];

        if(this.uppercaseCheckbox.checked){
            optionMethods.push(this.getRandomUppercase);
        }

        if(this.lowercaseCheckbox.checked){
            optionMethods.push(this.getRandomLowercase);
        }

        if(this.numbersCheckbox.checked){
            optionMethods.push(this.getRandomNumber);
        }

        if(this.symbolsCheckbox.checked){
            optionMethods.push(this.getRandomSymbol);
        }

        this.optionMethods = optionMethods;
    }

    // Method to generate a random uppercase character
    getRandomUppercase = () => {
        return String.fromCharCode(65 + Math.floor(Math.random() * 26));
    }

    // Method to generate a random lowercase character
    getRandomLowercase = () => {
        return String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }

    // Method to generate a random number
    getRandomNumber = () => {
        return Math.floor(Math.random() * 10);
    }

    // Method to generate a random symbol
    getRandomSymbol = () => {
        const symbols = `!@#$%^&*()_+={}[]:;,./`;
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    // Method to generate the password
    generatePassword = () => {
        if(!this.length.value)
            return;
            
        if(this.optionMethods.length === 0)
            return;

        const arrIndexes = Array.from(Array(+this.length.value));
        
        const password = arrIndexes.map(i => {
            const method = this.getRandomMethod();
            return method();

        }).join("");

        this.resultPassword.value = password;
    }

    // Method to get a random method from option methods
    getRandomMethod = () => {
        return this.optionMethods[Math.floor(Math.random() * this.optionMethods.length)];
    }

    // Method to copy the generated password to clipboard
    copyToClipboard = () => {
        const v = this.resultPassword.value;
        const cb = navigator.clipboard;
        cb.writeText(v).then(() => console.log("Password in clipboard!"));
    }
}

// Creating an instance of PasswordGenerator class
const passwordGenerator = new PasswordGenerator();
