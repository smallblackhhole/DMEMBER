/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Screnn from './Screen/Screen';
import login from './login/login';
import addaddress from './address/addaddress';
import payment from './Payment_confirm';
import {name as appName} from './app.json';
import address from './address/address';
import News from './News';
import Walletdcredit from './viDcash/WalletDcredit';
import withdrawDcash from './viDcash/withdrawDcash';
import DcashTransfer_1 from './viDcash/DcashTransfer_1';
import Avatar from './Component/Avata';
import inforTransfer from './viDcash/inforTransfer';
import Search from './Component/Search';
import Document from './Component/Document';
import Avatar2 from './Component/Avata2';
import documentmanage_1 from './joblist/documentManage_1';
import documentmanage_2 from './joblist/documentManage_2';
import Thongtin_dcm_2 from './Component/Thongtin_dcm_2';
import DcashTransfer_2 from './viDcash/DcashTransfer_2';
import Team from './Component/Team';
import TeamList from './joblist/TeamList';
import GroupManagement from './joblist/GroupManagement';
import Thongtin1 from './Component/Thongtin_1';
import Details_job from './joblist/details_job';
AppRegistry.registerComponent(appName, () => login);
