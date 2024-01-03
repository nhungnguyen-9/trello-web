import AttachmentIcon from '@mui/icons-material/Attachment'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import Button from '@mui/material/Button'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function Card({ card }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({
        id: card._id,
        data: { ...card }
    })

    const dndKitCardStyles = {
        // touchAction: 'none' //sensor default for pointer sensor
        transform: CSS.Translate.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : undefined,
        border: isDragging ? '1px solid #2e86de' : undefined
    }

    const showCardAction = () => {
        return !!card?.memberIds?.length || !!card?.comment?.length || !!card?.attachments?.length
    }

    return (
        <MuiCard
            ref={setNodeRef}
            style={dndKitCardStyles}
            {...attributes}
            {...listeners}
            sx={{
                cursor: 'pointer',
                boxShadow: '0px 1px 1px #091E4240',
                overflow: 'unset'
            }}>
            {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />}

            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>{card?.title}</Typography>
            </CardContent>
            {showCardAction() &&
                <CardActions sx={{ p: '0 4px 8px 4px' }}>
                    {!!card?.memberIds?.length && <Button size="small" startIcon={<PeopleAltIcon />}>{card?.memberIds?.length}</Button>}
                    {!!card?.comment?.length && <Button size="small" startIcon={<InsertCommentIcon />}>{card?.comment?.length}</Button>}
                    {!!card?.attachments?.length && <Button size="small" startIcon={<AttachmentIcon />}>{card?.attachments?.length}</Button>}
                </CardActions>
            }
        </MuiCard>
    )
}

export default Card
