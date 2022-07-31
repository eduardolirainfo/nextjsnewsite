import { FC } from 'react';
import Image from 'next/image'

interface Props {
    title: string
    dateString: string
    mainImageUrl: string
}

const imageLoader = require("./../utils/loader.js");

const BlogHeaderComponent: FC<Props> = ({
    title,
    dateString,
    mainImageUrl,
}) => {
    return (
        <div style={{ width: '600px', margin: 'auto' }}>
            <h1>{title}</h1>
            <Image style={{ width: '600px' }} src={mainImageUrl} alt={title} loader={imageLoader} />
            <p>Posted on {dateString}</p>
        </div>
    )
}

export default BlogHeaderComponent
