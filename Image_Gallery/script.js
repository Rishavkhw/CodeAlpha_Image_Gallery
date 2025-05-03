var fullimg1 = document.getElementById("fullimg1");
var fullimg2 = document.getElementById("fullimg2");

function openimg(pic) {
  fullimg1.style.display = "flex";
  fullimg2.src=pic;
}

function closeimg(){
    fullimg1.style.display = "none";
}