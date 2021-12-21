// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CoinGecko from "coingecko-api";

const CoinGeckoClient = new CoinGecko();

export default async function handler(req, res) {
  const { data, success, code } = await CoinGeckoClient.coins.all();
  if (success) {
    console.log("data: ", data);
    const parsedCoinData = data.map((rawCoin) => ({
      id: rawCoin.id,
      image: rawCoin.image.large,
      price: rawCoin.market_data.current_price.usd,
      currency: "usd",
      name: rawCoin.localization.en
    }));
    res.status(200).json(parsedCoinData);
  } else {
    res.status(code).json([]);
  }
}
