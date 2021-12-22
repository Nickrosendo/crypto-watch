// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CoinGecko from "coingecko-api";

const CoinGeckoClient = new CoinGecko();

const parseUpdateType: string = (updateAmount: number) => {
  return updateAmount > 0 ? "increase" : "decrease";
};

const parsePriceChange = (priceChange: number) => {
  return Number(priceChange.toFixed(3));
};

export default async function handler(req, res) {
  const { data, success, code } = await CoinGeckoClient.coins.all();
  if (success) {
    const parsedCoinData = data.map((rawCoin) => ({
      id: rawCoin.id,
      image: rawCoin.image.large,
      price: rawCoin.market_data.current_price.usd,
      currency: "$",
      name: rawCoin.localization.en,
      update: {
        type: parseUpdateType(rawCoin.market_data.price_change_percentage_24h),
        percentage: parsePriceChange(
          rawCoin.market_data.price_change_percentage_24h
        ),
      },
    }));

    res.status(200).json(parsedCoinData);
  } else {
    res.status(code).json([]);
  }
}
