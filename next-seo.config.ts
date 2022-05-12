const title = 'Trippin’ Ape Tribe - it is NOT a cult'
const descripiton = 'The best NFT project on the Solana blockchain with the biggest community in the crypto space.'
const url = 'https://trippin-ape-website.vercel.app/'
const twitter = '@0xVeo'


const SEO = {
    title,
    descripiton,
    canonical: url,
    openGraph: {
        type: 'website',
        locale: 'en_EN',
        url,
        title,
        descripiton,
        images: [
            {
                url: `${url}images/background.jpg`,
                alt: title,
                width: 1200,
                height: 628
            }
        ]
    },
    twitter: {
        handle: twitter,
        site: twitter,
        cardType: 'summary_large_image'
    }
}

export default SEO