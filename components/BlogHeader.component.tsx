import { FC } from 'react'

interface Props {
    title: string
    dateString: string
    mainImageUrl: string
}

const BlogHeaderComponent: FC<Props> = ({
    title,
    dateString,
    mainImageUrl
}) => {
    return (
        <div style={{ width: '600px', margin: 'auto' }}>
            <img style={{ width: '600px' }} src={mainImageUrl} alt={title} />
            <h1>{title}</h1>
            <p>{dateString}</p>
        </div>
    )
}

export default BlogHeaderComponent