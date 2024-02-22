

// class PasswordGenerator {
//     constructor() {
//         this.resultPassword = document.querySelector("#result");
//         this.clipboardButton = document.querySelector("#clipboard");
//         this.length = document.querySelector("#length");
//         this.lengthRange = document.querySelector("#lengthRange");

//         this.lowercaseCheckbox = document.querySelector("#lowercase");
//         this.uppercaseCheckbox = document.querySelector("#uppercase");

//         this.numbersCheckbox = document.querySelector("#numbers");
//         this.symbolsCheckbox = document.querySelector("#symbols");
//         this.generateButton = document.querySelector("#generate-password");
    
//         this.init();
//     }

//     init() {
//         document.querySelectorAll(".password-generator input[type='checkbox']")
//             .forEach( cb => cb.addEventListener("click", this.updateOptions) );
    
//         this.generateButton.addEventListener("click", this.generatePassword);
//         this.clipboardButton.addEventListener("click", this.copyToClipboard);
    
//         this.lengthRange.addEventListener("input", this.rangeLengthChange);
//         this.length.addEventListener("input", this.lengthChange);

//         this.updateOptions();
//     }

//     rangeLengthChange = () => {

//         // Add code for range length change
//         this.length.value = this.lengthRange.value;
//     }

//     lengthChange = () => {
//         this.lengthRange.value = this.length.value;
//     }

//     updateOptions = () => {
//        const optionMethods = [];

//        if(this.uppercaseCheckbox.checked){
//             optionMethods.push(this.getRandomUppercase);
//        }

//        if(this.lowercaseCheckbox.checked){
//             optionMethods.push(this.getRandomLowercase);
//        }

//        if(this.numbersCheckbox.checked){
//             optionMethods.push(this.getRandomNumber);
//        }

//        if(this.symbolsCheckbox.checked){
//             optionMethods.push(this.getRandomSymbol);
//        }

//        this.optionMethods = optionMethods;
//     }

//     getRandomUppercase = () =>{ // od 65 do 90
//         return String.fromCharCode( 65 + Math.floor(Math.random() * 26) );
//     }

//     getRandomLowercase = () => {  // ascii od 97 do 120
//         return String.fromCharCode( 97 + Math.floor(Math.random() * 26) );
//     }

//     getRandomNumber = () => {
//         return Math.floor(Math.random() * 10);
//     }

//     getRandomSymbol = () => {
//         const symbols = `!@#$%^&*()_+={}[]:;,./`;
//         return symbols[Math.floor(Math.random() * symbols.length)];
//     }

//     generatePassword = () => {
//         if(!this.length.value)
//         return;
        
//         if(this.optionMethods.length === 0)
//         return;

//         const arrIndexes = Array.from( Array(+this.length.value) );
//         console.log(arrIndexes);

//         const password = arrIndexes.map( i => {
//             const method = this.getRandomMethod();
//             return method();

//         }).join("");

//         this.resultPassword.value = password;
//     }

//     getRandomMethod = () => {
//         return this.optionMethods[ Math.floor(Math.random() * this.optionMethods.length) ]
//     }

//     copyToClipboard = () => {
//         const v = this.resultPassword.value;
//         const cb = navigator.clipboard;
//         cb.writeText(v).then(() => console.log("Password in clipboard!"));
//     }
// }

// const passwordGenerator = new PasswordGenerator();



class PasswordGenerator {
    constructor() {
        this.resultPassword = document.querySelector("#generatedPassword");
        this.clipboardButton = document.querySelector("#copyButton");
        this.length = document.querySelector("#passwordLength");
        this.lengthRange = document.querySelector("#passwordLengthRange");

        this.lowercaseCheckbox = document.querySelector("#includeLowercase");
        this.uppercaseCheckbox = document.querySelector("#includeUppercase");

        this.numbersCheckbox = document.querySelector("#includeNumbers");
        this.symbolsCheckbox = document.querySelector("#includeSymbols");
        this.generateButton = document.querySelector("#generatePasswordButton");
    
        this.init();
    }

    init() {
        document.querySelectorAll(".password-generator input[type='checkbox']")
            .forEach(cb => cb.addEventListener("click", this.updateOptions));
    
        this.generateButton.addEventListener("click", this.generatePassword);
        this.clipboardButton.addEventListener("click", this.copyToClipboard);
    
        this.lengthRange.addEventListener("input", this.rangeLengthChange);
        this.length.addEventListener("input", this.lengthChange);

        this.updateOptions();
    }

    rangeLengthChange = () => {
        this.length.value = this.lengthRange.value;
    }

    lengthChange = () => {
        this.lengthRange.value = this.length.value;
    }

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

    getRandomUppercase = () => {
        return String.fromCharCode(65 + Math.floor(Math.random() * 26));
    }

    getRandomLowercase = () => {
        return String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }

    getRandomNumber = () => {
        return Math.floor(Math.random() * 10);
    }

    getRandomSymbol = () => {
        const symbols = `!@#$%^&*()_+={}[]:;,./`;
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

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

    getRandomMethod = () => {
        return this.optionMethods[Math.floor(Math.random() * this.optionMethods.length)]
    }

    copyToClipboard = () => {
        const v = this.resultPassword.value;
        const cb = navigator.clipboard;
        cb.writeText(v).then(() => console.log("Password in clipboard!"));
    }
}

const passwordGenerator = new PasswordGenerator();