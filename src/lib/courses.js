export const courses = [
  {
    id: "java1",
    title: "Learning Java",
    author: "The Ghoul of the Family",
    duration: "5 hour 20 min",
    category: "Java",
    image: "/img1.jpg"
  },
  {
    id: "javascript1",
    title: "Learning JavaScript",
    author: "The Ghoul of the Family",
    duration: "5 hour 20 min",
    category: "JavaScript",
    image: "/img2.jpg"
  },
  {
    id: "python1",
    title: "Learning Python",
    author: "The Ghoul of the Family",
    duration: "5 hour 20 min",
    category: "Python",
    image: "/img3.jpg"
  },
  {
    id: "test1",
    title: "Ah ah testing testing",
    author: "The Ghoul of the Family",
    duration: "1 min",
    category: "Tester",
    image: "/img4.png"
  }
  // ...add more later... hopefully
]

export const courseContents = {
    "java1": [
        {
            id: "jav1Lec1",
            title: "Lecture 1: Intro to Java and Programming",
            duration: "30 min",
            thumb: "/img1.jpg",
            videoUrl: "https://res.cloudinary.com/dev-tuts/video/upload/jav1Lec1.mp4"
        },
        {
            id: "jav1Lec2",
            title: "Lecture 2: Writing Logic",
            duration: "30 min",
            thumb: "/img1.jpg",
            videoUrl: "https://res.cloudinary.com/dev-tuts/video/upload/jav1Lec2.mp4"
        },
        {
            id: "jav1Lec3",
            title: "Lecture 3: Control Statements",
            duration: "40 min",
            thumb: "/img1.jpg",
            videoUrl: "https://res.cloudinary.com/dev-tuts/video/upload/jav1Lec3.mp4"
        }
    ],
    "javascript1": [
        {
            id: "js1Lec1",
            title: "Lecture 1: Intro to JavaScript and Programming",
            duration: "30 min",
            thumb: "/img2.jpg",
            videoUrl: "https://res.cloudinary.com/dev-tuts/video/upload/js1Lec1.mp4"
        }
    ],
    "python1": [
        {
            id: "py1Lec1",
            title: "Lecture 1: Intro to Python and Programming",
            duration: "30 min",
            thumb: "/img3.jpg",
            videoUrl: "https://res.cloudinary.com/dev-tuts/video/upload/py1Lec1.mp4"
        }
    ],
    "test1": [
        {
            id: "tst1Lec1",
            title: "Test Lecture 1: Welcome to Class",
            duration: "short",
            thumb: "/img4.png",
            videoUrl: "https://res.cloudinary.com/dta1affwu/video/upload/f_jpg/v1750797706/dev-tuts-testing_wcojl5.mov"
        }
    ]
}






//cloud name: dta1affwu => i can maybe upload the videos to this place and download from there