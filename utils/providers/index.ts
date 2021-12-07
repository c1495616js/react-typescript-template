import { combineProviders } from 'react-combine-providers';

/** all providers */
import ReactQueryProvider from './react-query';

const providers = combineProviders();
providers.push(ReactQueryProvider);

const MasterProvider = providers.master();

export default MasterProvider;
