import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { ArbitrumDefiedgeStrategyTokenFetcher } from './arbitrum/defiedge.strategy.token-fetcher';
import { BinanceSmartChainDefiedgeStrategyTokenFetcher } from './binance-smart-chain/defiedge.strategy.token-fetcher';
import { DefiedgeStrategyDefinitionsResolver } from './common/defiedge.strategy.definitions-resolver';
import { DefiedgeContractFactory } from './contracts';
import { EthereumDefiedgeStrategyTokenFetcher } from './ethereum/defiedge.strategy.token-fetcher';
import { OPTIMISM_DEFIEDGE_PROVIDERS } from './optimism';
import { POLYGON_DEFIEDGE_PROVIDERS } from './polygon';

@Module({
  providers: [
    DefiedgeContractFactory,
    DefiedgeStrategyDefinitionsResolver,
    ArbitrumDefiedgeStrategyTokenFetcher,
    EthereumDefiedgeStrategyTokenFetcher,
    BinanceSmartChainDefiedgeStrategyTokenFetcher,
    ...POLYGON_DEFIEDGE_PROVIDERS,
    ...OPTIMISM_DEFIEDGE_PROVIDERS,
  ],
})
export class DefiedgeAppModule extends AbstractApp() {}
