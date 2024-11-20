import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
export default function Booking() {
    return (
        <div className="mt-[20vh] h-[80vh] bg-white">
            <h1 className="text-xl p-5">
            Dentist Booking Form
            </h1>
            <p className="text-lg p-5">Please enter your information</p>
            <TextField className="m-5" label="Name-Lastname" variant="outlined" name="Name-Lastname"/>
            <TextField className="m-5" label="Name-Lastname" variant="outlined" name="Name-Lastname"/>
            <TextField className="m-5" label="Citizen ID" variant="outlined" name="Citizen ID"/>
            <p className="text-lg p-5">Select dentist application date</p>
            <DateReserve/>
            <p className="text-lg p-5">Select your dentist application place</p>
            <div className="p-5">
            <Select variant="standard" name="location" id="location" className="h-[2em] w-[200px]">
                <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
                <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                <MenuItem value="Vajira">Vajira Hospital</MenuItem>
            </Select>
            <button name=" Book Vaccine" className="bg-blue-200 p-5 rounded-md m-2 shadow-sm hover:bg-blue-500 hover:text-white">Dentist Book</button>
            </div>
        </div>
        
    );
}