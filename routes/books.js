//Let's import packages here
const express=require("express");
const router=express.Router();

const books=[
    {
        id: 1,
        name: 'English',
        price: 500,
        grade: "8",
    },
    {
        id: 2,
        name: 'Physics',
        price: 600,
        grade: "9",
    },
    {
        id: 3,
        name: 'Mathematics',
        price: 700,
        grade: "10",
    },
    {
        id: 4,
        name: 'Chemistry',
        price: 800,
        grade: "10",
    },
    {
        id: 5,
        name: 'Mathematics',
        price: 500,
        grade: "11",
    },
    {
        id: 6,
        name: 'History',
        price: 900,
        grade: "12",
    },
    {
        id: 7,
        name: 'Geography',
        price: 700,
        grade: "9",
    },
    {
        id: 8,
        name: 'General Knowledge',
        price: 100,
        grade: "8",
    },
    {
        id: 9,
        name: 'Physics',
        price: 700,
        grade: "12",
    },
    {
        id: 10,
        name: 'Designing',
        price: 1300,
        grade: "10",
    },

];

//Response of the server on the homepage:
router.get('/', (req, res) => {
    res.status(200).json(books);
  });

  router.post(`/`, function (req, res) {
    const { name, price, grade } = req.body;
    //we spread or fetch the books array and then display them in json format
    // with id starting from 1 instaed of 0 and name, price and grade
    res.status(200).json([...books, { id: books.length + 1, name, price, grade }]);
});

router.delete(`/`, function (req, res) {
    const { id } = req.body;
    res.status(200).json(books.filter(books => books.id !== id));
});

module.exports = router;
