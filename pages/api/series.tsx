

const fetcher = (url: RequestInfo) => fetch(url).then(r => r.json())

export default async (req, res) => {

    const popular = await fetcher(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_SECRET}&language=da&page=1`)

    res.status(200).json(popular)
}