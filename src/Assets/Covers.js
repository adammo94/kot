import React from 'react'



export const Covers = (props) => {

    const Cover = [
        'https://www.publio.pl/files/product/product_w450/3d/fc/20/48207-kolor-magii-terry-pratchett-1.jpg',
        'https://www.publio.pl/files/product/product_w320/cc/16/e9/303752-pomowmy-szczerze-julian-barnes-1.jpg',
        'https://www.publio.pl/files/product/product_w450/57/76/0e/555572-red-white-and-royal-blue-casey-mcquiston-1.jpg',
        'https://www.publio.pl/files/product/product_w450/0b/26/48/127262-middlesex-jeffrey-eugenides-1.jpg'
    ]

    const getCover = (index) => {
        return <img src={Cover[index]} className={props.className} style={props.style}/>
    }

    return(
        <>
            {getCover(props.index)}
        </>
    )
}

export default Covers;