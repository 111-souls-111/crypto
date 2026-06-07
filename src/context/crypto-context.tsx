// CryptoContext.tsx
import { createContext, useState, useEffect, ReactNode } from "react";
import { fakeFetchCrypto, FetchAssets } from '../api';
import { parsentDifference } from '../utils';
import type { CryptoCoin, CryptoAsset, CryptoDataResponse } from '../api';

interface ExtendedAsset extends CryptoAsset {
    grow: boolean;
    growPercent: number;
    totalAmount: number;
    totalProfit: number;
}

interface CryptoContextType {
    assets: ExtendedAsset[];
    crypto: CryptoCoin[];
    loading: boolean;
}

const CryptoContext = createContext<CryptoContextType>({
    assets: [],
    crypto: [],
    loading: false,
});

interface CryptoContextProviderProps {
    children: ReactNode;
}

export function CryptoContextProvider({ children }: CryptoContextProviderProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const [crypto, setCrypto] = useState<CryptoCoin[]>([]);
    const [assets, setAssets] = useState<ExtendedAsset[]>([]);

    useEffect(() => {
        async function preload(): Promise<void> {
            setLoading(true);
            
            // Теперь data имеет тип CryptoDataResponse
            const data: CryptoDataResponse = await fakeFetchCrypto();
            const assetsData: CryptoAsset[] = await FetchAssets();

            setAssets(
                assetsData.map((asset: CryptoAsset) => {
                    const coin = data.result.find((c: CryptoCoin) => c.id === asset.id);
                    
                    if (!coin) {
                        throw new Error(`Coin with id ${asset.id} not found`);
                    }
                    
                    return {
                        grow: asset.price < coin.price,
                        growPercent: parsentDifference(asset.price, coin.price),
                        totalAmount: asset.amount * coin.price,
                        totalProfit: asset.amount * coin.price - asset.amount * asset.price,
                        ...asset
                    };
                })
            );
            
            setCrypto(data.result);
            setLoading(false);
        }
        
        preload();
    }, []);

    return (
        <CryptoContext.Provider value={{ loading, crypto, assets }}>
            {children}
        </CryptoContext.Provider>
    );
}

export default CryptoContext;