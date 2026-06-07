// api.ts
import { cryptoAssets, cryptoData } from './data';

// Более точные типы на основе ваших данных
export interface CryptoCoin {
    id: string;
    icon: string;
    name: string;
    symbol: string;
    rank: number;
    price: number;
    priceBtc: number;
    volume: number;
    marketCap: number;
    availableSupply: number;
    totalSupply: number;
    priceChange1h: number;
    priceChange1d: number;
    priceChange1w: number;
    redditUrl: string;
    websiteUrl: string;
    twitterUrl: string;
    explorers: string[];
    contractAddress?: string;
    decimals?: number;
}

export interface CryptoMeta {
    page: number;
    limit: number;
    itemCount: number;
    pageCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}

export interface CryptoDataResponse {
    result: CryptoCoin[];
    meta: CryptoMeta;
}

export interface CryptoAsset {
    id: string;
    amount: number;
    price: number;
    date: Date;
}

export function fakeFetchCrypto(): Promise<CryptoDataResponse> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoData as CryptoDataResponse);
        }, 2000);
    });
}

export function FetchAssets(): Promise<CryptoAsset[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets as CryptoAsset[]);
        }, 2000);
    });
}