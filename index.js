window.button = function () {
  alert("Only Admin can change content")
  const signup=document.getElementById("signup")
  

  
  signup.classList.add("a5demo")
};
window.closepop=function(){
  let e1=document.getElementById("e1").value;
  let e2=document.getElementById("e3").value;
  const j1="Raju"
  const j2="Raju4321@"
  if(e1===j1 && e2===j2){
    alert("Welcome Raju")
    const skillform=document.getElementById("skillForm")
    skillform.classList.toggle("skillforman")
    signup.classList.remove("a5demo")
    
  }
  else
{
  alert("Invalid Details")
}
}
 window.cross=function()
 {
  signup.classList.remove("a5demo")
 }

  const uploadInput = document.getElementById("upload");
  const nameInput = document.getElementById("skillName");
  const container = document.getElementById("con1");

  let skills = JSON.parse(localStorage.getItem("skillsList")) || [];
  skills.forEach(skill => displaySkill(skill.name, skill.image));

  uploadInput.addEventListener("change", function () {
    const file = this.files[0];
    const skillName = nameInput.value.trim();

    if (!file || !skillName) {
      alert("Please enter a skill name and select an image.");
      return;
    }

    const reader = new FileReader();

    reader.onload = function () {
      const imageURL = reader.result;

      const newSkill = {
        name: skillName,
        image: imageURL
      };

      skills.push(newSkill);
      localStorage.setItem("skillsList", JSON.stringify(skills));
      displaySkill(newSkill.name, newSkill.image);

      nameInput.value = "";
      uploadInput.value = "";
    };

    reader.readAsDataURL(file);
  });

  function displaySkill(name, imageURL) {
    const li = document.createElement("li");
    li.className = "html";

    const img = document.createElement("img");
    img.src = imageURL;
    img.alt = name;

    const h5 = document.createElement("h5");
    h5.textContent = name;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginTop = "10px";
    deleteBtn.style.padding = "5px";
    deleteBtn.style.backgroundColor = "#0ef";
    deleteBtn.style.color = "#081b29";
    deleteBtn.style.border = "none";
    deleteBtn.style.borderRadius = "4px";
    deleteBtn.style.cursor = "pointer";

    deleteBtn.addEventListener("click", () => {
      li.remove();
      skills = skills.filter(skill => !(skill.name === name && skill.image === imageURL));
      localStorage.setItem("skillsList", JSON.stringify(skills));
    });

    li.appendChild(img);
    li.appendChild(h5);
    li.appendChild(deleteBtn);
    container.appendChild(li);
  }
function sendEmail() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address= document.getElementById("linkedin").value.trim();
  const message = document.getElementById("message").value.trim();
  const formStatus = document.getElementById("formStatus");

  if (!name || !email || !phone || !linkedin || !message) {
    formStatus.textContent = "❗ Please fill in all fields.";
    formStatus.style.color = "red";
    return;
  }

  emailjs.send("service_q96vt7b", "template_rlfp745", {
    from_name: name,
    from_email: email,
    phone: phone,
    Address:address,
    message: message
  }).then(
    () => {
      formStatus.textContent = "✅ Message sent successfully!";
      formStatus.style.color = "green";
      document.getElementById("contactForm").reset();
    },
    (error) => {
      formStatus.textContent = "❌ Failed to send. Please try again.";
      formStatus.style.color = "red";
      console.error("EmailJS Error:", error);
    }
  );
}



