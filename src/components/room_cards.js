import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

const RoomCards = () => {
    return ( 
        <div>
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
                Hello
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        </div>
    );
}
 
export default RoomCards;