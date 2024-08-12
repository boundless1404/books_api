import { BorrowStatus } from "../enum/borrow-status.enum";


export default interface BorrowedBook {
    id: Number,
    bookId: number;
    userId: number;
    borrowedDate: Date;
    returnedDate: Date;
    dueDate: Date;
}

