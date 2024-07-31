

function handleUpdate(){
  console.log(this)
  const suffix = this.dataset.sizing || "";

  console.log(suffix)
  document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}
const inputs=document.querySelectorAll(".controls input");
inputs.forEach(input => input.addEventListener('change',handleUpdate)); 
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));