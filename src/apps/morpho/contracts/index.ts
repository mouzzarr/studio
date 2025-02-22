import { Injectable, Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { ContractFactory } from '~contract/contracts';
import { Network } from '~types/network.interface';

import { MorphoAToken__factory } from './ethers';
import { MorphoAaveV2__factory } from './ethers';
import { MorphoAaveV2Lens__factory } from './ethers';
import { MorphoCToken__factory } from './ethers';
import { MorphoCompound__factory } from './ethers';
import { MorphoCompoundLens__factory } from './ethers';

// eslint-disable-next-line
type ContractOpts = { address: string; network: Network };

@Injectable()
export class MorphoContractFactory extends ContractFactory {
  constructor(@Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit) {
    super((network: Network) => appToolkit.getNetworkProvider(network));
  }

  morphoAToken({ address, network }: ContractOpts) {
    return MorphoAToken__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  morphoAaveV2({ address, network }: ContractOpts) {
    return MorphoAaveV2__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  morphoAaveV2Lens({ address, network }: ContractOpts) {
    return MorphoAaveV2Lens__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  morphoCToken({ address, network }: ContractOpts) {
    return MorphoCToken__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  morphoCompound({ address, network }: ContractOpts) {
    return MorphoCompound__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  morphoCompoundLens({ address, network }: ContractOpts) {
    return MorphoCompoundLens__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
}

export type { MorphoAToken } from './ethers';
export type { MorphoAaveV2 } from './ethers';
export type { MorphoAaveV2Lens } from './ethers';
export type { MorphoCToken } from './ethers';
export type { MorphoCompound } from './ethers';
export type { MorphoCompoundLens } from './ethers';
