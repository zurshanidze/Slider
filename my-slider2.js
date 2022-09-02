var photos = [
    {
        url: "https://www.google.com/",
        img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
        // https://media.wired.com/photos/5fb70f2ce7b75db783b7012c/125:94/w_500,h_1786,c_limit/Gear-Photos-597589287.jpg
        title: "nature",
    },
    {
        url: "https://www.google.com/",
        img: "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg",
        title: "photoshoot",
    },
    {
        url: "https://www.google.com/",
        img: "https://i.insider.com/5d35bf63454a3947b349c915?width=1136&format=jpeg",
        title: "Example",
    },
    {
        url: "https://www.google.com/",
        img: "https://i.pinimg.com/originals/a4/6c/4d/a46c4dea15a013d3f779e8cf97a09a46.jpg",
        // https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__480.jpg
        title: "galaxy",
    }, 
]


// assign HTML elements to the variables
var content = document.getElementById('content');
var titlePhoto = document.getElementById('title-photo');
var left = document.getElementById("left");
var right = document.getElementById("right");

// declare and define "CurrentIndex" value
var currentIndex = 0;




     // Create img element and fetch url from data "Photos"
function createImgElement(currentIndex){
        let image = document.createElement("img")
        image.src = `${photos[currentIndex].img}`
        image.alt = `${photos[currentIndex].title}`
        image.id = [currentIndex]

        if(currentIndex == image.id){
            content.innerHTML=""
            content.appendChild(image)
        }

        titlePhoto.innerText = photos[currentIndex].title
}
createImgElement(currentIndex)




        // Create function "Previous" For previous index photos
function previous(){
    if(currentIndex == 0 && left){
        currentIndex = photos.length - 1
        createImgElement(currentIndex)
    }
    else{
        currentIndex = currentIndex - 1
        createImgElement(currentIndex)
    }
}


        // Create function "Next" For next index photos
function next(){
    if(currentIndex == photos.length - 1 && right){
        currentIndex = 0
        createImgElement(currentIndex)
    }
    else{
        currentIndex = currentIndex + 1
        createImgElement(currentIndex)
    }
}


        // add on buttons eventlistener & function
// on "Left" button click add  previous function
left.addEventListener("click", previous)

// on "right" button click add  next function
right.addEventListener("click", next)



