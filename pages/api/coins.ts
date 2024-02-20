// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

type PartialApiResponse = {
  asset_id: string
  name: string
  type_is_crypto: 0 | 1
  price_usd?: number,
  id_icon: string
}

type ParitalIconResponse = {
  exchange_id: string
  asset_id: string
  url: string
}

const apiKey = process.env.API_KEY?.toString()

export default async function handler(req, res) {
  const { data, status } = await axios.get<PartialApiResponse[]>(`https://rest.coinapi.io/v1/assets\?apiKey=${apiKey}`)
  const { data: icons } = await axios.get<ParitalIconResponse[]>(`https://rest.coinapi.io/v1/assets/icons/48?apiKey=${apiKey}`)
  const iconsMap: Record<string, string> = {}
  if (icons !== undefined) {
    icons.forEach((icon: ParitalIconResponse) => {
      iconsMap[icon.asset_id] = icon.url
    })
  }

  if (status === 200) {
    const parsedCoinData = data.filter((data: PartialApiResponse) => data.price_usd !== undefined).map((data: PartialApiResponse) => ({
      id: data.asset_id,
      image: data.asset_id in iconsMap ? iconsMap[data.asset_id] : '',
      price: data.price_usd.toFixed(3),
      currency: "$",
      name: data.name,
    }));

    res.status(200).json(parsedCoinData);
  } else {
    res.status(status).json([]);
  }
}
