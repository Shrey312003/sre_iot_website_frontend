import { Grid, Grid2 } from "@mui/material";
import RoomCards from "../components/room_cards";
const Home = () => {
    const number_of_cards = 3;
    return ( 
        <div>
            <Grid2 container spacing={3} sx={{
                margin:"2% 5% 2% 5%"
            }}>
                
                <Grid2 item md= {4}>
                    <RoomCards></RoomCards>
                </Grid2>
                <Grid2 item md= {4}>
                    <RoomCards></RoomCards>
                </Grid2>
                <Grid2 item md= {4}>
                    <RoomCards></RoomCards>
                </Grid2>
            </Grid2>
        </div>
    );
}
 
export default Home;