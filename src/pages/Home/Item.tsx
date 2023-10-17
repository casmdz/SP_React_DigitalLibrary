import { Paper, Card } from '@mui/material'

function Item({item} : any)
{
    return (
        <Paper variant="outlined" 
        style={{ height: 450 }}>
            <Card>
                <img src={item.image} alt={item.title} style={{ width: '100%',height: '450px',}}/>
            </Card>
            
        </Paper>
    )
}
export default Item