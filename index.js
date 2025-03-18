function testing(){
    console.log("test")
}
const input = document.getElementById('inputter');
input.addEventListener('change',function(event){
    console.log("tester")
    const file = event.target.files[0];
    if (file) {
        console.log('File selected:', file.name);
        const image = document.getElementById("imageFiles")
        const fileURL = URL.createObjectURL(file);
        const textArea = document.getElementById("textArea") 
        image.src = fileURL;
        image.style.width = "500px"

        const reader = new FileReader();

        reader.onload = function(e) {
            const base64Image = e.target.result; // This contains the Base64 string
            console.log(base64Image); // Log or send this Base64 string to backend or use it directly
            textArea.innerHTML = base64Image;
            textArea.style.width = "100%"
        };

        // Read the file as a Base64 URL
        reader.readAsDataURL(file);
    } 
    
    else {
        console.log('No file selected');
    }
})
