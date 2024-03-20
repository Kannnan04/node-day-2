const rooms = [
    {
        room_id:1,
        room_name:"room-1",
        room_status:"avaliable",
        amenities:"tv,bed,sofa",
        Seat:10,
        Price:1000
    },
    {
        room_id:2,
        room_name:"room-2",
        room_status:"avaliable",
        amenities:"tv,bed,sofa",
        Seat:30,
        Price:2500
    },
    {
        room_id:3,
        room_name:"room-3",
        room_status:"avaliable",
        amenities:"tv,bed,sofa",
        Seat:35,
        Price:3000
    }

]

let bookingRoom = []

// adding rooms into createroom  (http://localhost:5000/api/add) task-1

export const createNewRoom = (req,res) =>{

    const { room_id, room_name, room_status,amenities,Seat, Price} = req.body

    const newRoom = {
        room_id :room_id,
        room_name:room_name,
        room_status:room_status,
        amenities:amenities,
        Seat:Seat,
        Price:Price
    }
    rooms.push(newRoom)
    res.status(200).json({message:"Room added suucessfully",data:rooms})
   
}

// list all rooms () // task-3

 export const allRooms = (req,res)=>{
    res.status(200).json({message:"Display all rooms", data:rooms})
}

// booking room //task-2

export const bookRooms = (req,res) =>{

    let{customer_name,date,start_time,end_time,roomId} = req.body;

    let room = rooms.filter((e) => e.room_status === 'avaliable' && e.room_id == roomId)

    if((!room)){
        res.status(404).json({messsage:"Room is not avaliable"})
    }
    else{
        let bookingRoomDate = bookingRoom.filter((room) => room.booking_date === date)
        
        if((bookingRoomDate.length > 0)){
            res.status(400).json({message:"date is not avaliable"})
        }
        else{
            let bookNewRoom = {
                customer_name,
                start_time,
                end_time,
                roomId,
                Date:date,
                booking_id: bookingRoom.length + 1,
                booking_date: date,
                status:"Booked"
            }
            bookingRoom.push(bookNewRoom)
            console.log(bookingRoom)
           
            res.status(200).json({message:"room booked succesfully", Bookingroom: bookingRoom})
        }
    }

}

// booked data //task-4

export const BookedRoom = (req,res) => {
    res.status(200).json({message:"Showing all booked datails" ,rooms:bookingRoom})
} 



 export const allCustomerData = (req,res) =>{
    const customerList = bookingRoom.map((booking) =>{
        const room = rooms.filter((e) => e.room_id === booking.roomId)
        return{

            customer_Name: booking.customer_name,
            Room_name: room ? rooms.room_name: null,
            Date: booking_date,
            start_time: booking.start_time,
            end_time:booking.end_time

        }
    })
    res.status(200).json({message:"successfully fetched detail",data:customerList})
}

// booking count // task-5

export const bookCount = (req,res) =>{
    const{customer_Name} = req.params;
    const customerBooking = bookingRoom.filter((e) =>{
        return e.customer_Name === customer_Name;
    })
    console.log(customerBooking)

    res.status(200).json({message:"successfully added",
    customer_Name,
    booking_Count: bookingRoom.length,
    booking:bookingRoom
})
}