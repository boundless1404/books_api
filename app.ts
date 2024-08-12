import express from 'express';
const app = express();
app.use(express.json());


import Book from "./src/entities/book.entity";
import BorrowedBook from "./src/entities/borrowed_book.entity";
import Category from "./src/entities/category.entity";
import User from "./src/entities/user.entity";


// In-memory list of books
let book: Book[] = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        categoryId: 1,
        author: "Harper Lee",
        description: "A novel about the serious issues of rape and racial inequality.",
        publication_year: 1960,
        available_status: true
    },
    {
        id: 2,
        title: "1984",
        categoryId: 2,
        author: "George Orwell",
        description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
        publication_year: 1949,
        available_status: true
    },
    {
        id: 3,
        title: "Pride and Prejudice",
        categoryId: 1,
        author: "Jane Austen",
        description: "A romantic novel that critiques the British landed gentry at the end of the 18th century.",
        publication_year: 1813,
        available_status: false
    },
    {
        id: 4,
        title: "The Great Gatsby",
        categoryId: 1,
        author: "F. Scott Fitzgerald",
        description: "A novel about the American dream and the roaring twenties.",
        publication_year: 1925,
        available_status: true
    },
    {
        id: 5,
        title: "Moby-Rick",
        categoryId: 3,
        author: "Herman Melville",
        description: "A novel about the voyage of the whaling ship Pequod and its captain's obsession with the white whale, Moby Dick.",
        publication_year: 1851,
        available_status: false
    }
];

let category: Category[] = [
    {
        id: 1,
        name: "Technology",
        description: "All about the latest in tech, gadgets, and software."
    },
    {
        id: 2,
        name: "Science",
        description: "Topics related to scientific discoveries, research, and experiments."
    },
    {
        id: 3,
        name: "Health",
        description: "Information and tips on health, wellness, and medical advancements."
    },
    {
        id: 4,
        name: "Education",
        description: "Resources and insights on teaching, learning, and academic life."
    },
    {
        id: 5,
        name: "Entertainment",
        description: "Updates on movies, music, games, and pop culture."
    }
];

let borrowedBooks: BorrowedBook[] = [];
let user: User[]  = [];


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});