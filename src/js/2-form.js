const formData = {
    email: "", message: ""
};

const inputArea = document.querySelector(".feedback-form");
const savedValues = JSON.parse(localStorage.getItem("feedback-form-state"));

if (savedValues !== null) {
   
    inputArea.elements.email.value = savedValues.email;
    inputArea.elements.message.value = savedValues.message;
    formData.email = savedValues.email;
    formData.message = savedValues.message;
};

inputArea.addEventListener("input", event => {
    event.preventDefault();
    
    if (event.target.name === "email") {
        formData.email = event.target.value;
    }
    else {
        formData.message = event.target.value;
    };
        
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

inputArea.addEventListener("submit", evt => {
    evt.preventDefault();
    
    formData.email = evt.target.elements.email.value.trim();
    formData.message = evt.target.elements.message.value.trim();
    
    if (formData.email === "" || formData.message === "") {
        return alert("Fill please all fields");
    }
    
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    inputArea.reset();
});



