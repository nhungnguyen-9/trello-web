import AttachmentIcon from '@mui/icons-material/Attachment'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import Button from '@mui/material/Button'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

function Card({ temporaryHideMedia }) {
    if (temporaryHideMedia) {
        return (
            <MuiCard sx={{
                cursor: 'pointer',
                boxShadow: '0px 1px 1px #091E4240',
                overflow: 'unset'
            }}>
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                    <Typography>Test Card 1</Typography>
                </CardContent>
            </MuiCard>
        )
    }
    return (
        <MuiCard sx={{
            cursor: 'pointer',
            boxShadow: '0px 1px 1px #091E4240',
            overflow: 'unset'
        }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="green iguana"
            />
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>renderable action</Typography>
            </CardContent>
            <CardActions sx={{ p: '0 4px 8px 4px' }}>
                <Button size="small" startIcon={<PeopleAltIcon />}>20</Button>
                <Button size="small" startIcon={<InsertCommentIcon />}>10</Button>
                <Button size="small" startIcon={<AttachmentIcon />}>5</Button>
            </CardActions>
        </MuiCard>
    )
}

export default Card
