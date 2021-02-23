class Utility {
    constructor() {
    }
    static validateFormInput(button, currentInput, allInputs) {
        let title = allInputs[0];
        let desc = allInputs[1];
        if (allInputs[0].value && allInputs[1].value) {
            currentInput.classList.remove('invalid');
            button.disabled = false;
            button.classList.remove('disabled');
        }
        else {
            currentInput.classList.add('invalid');
            button.disabled = true;
            button.classList.add('disabled');
        }
    }
    static addListeners(events, action) {
        events.forEach(event => {
            document.addEventListener(event, action);
        });
    }
    static addMultiListeners(object) {
        let [event, action] = Object.values(object);
        for (let i = 0; i < event.length; i++) {
            document.addEventListener(event[i], action[i]);
        }
    }
}
export default Utility