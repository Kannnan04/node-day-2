import express from 'express';
import { createNewRoom, allRooms, BookedRoom, allCustomerData, bookCount, bookRooms } from '../Controllers/createRoomControl.js';


const router = express.Router()

router.post('/add',createNewRoom)                                 //http://localhost:4000/api/add
router.get('/all-room', allRooms )                               //http://localhost:4000/api/all-room
router.post('/booking-room',  bookRooms )                        //http://localhost:4000/api/all-room
router.get('/booking-room', BookedRoom )                        //http://localhost:4000/api/booking-room
router.get('/all-customer-detail', allCustomerData)            // http://localhost:4000/api/booking-room
router.get('/book-count', bookCount)                           //http://localhost:4000/api/book-count








export default router;