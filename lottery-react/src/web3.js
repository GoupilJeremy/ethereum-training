import Web3 from 'web3';
import {get} from 'lodash';

const ethereum = get(window, 'ethereum', {enable: () => true});

const web3 = new Web3(ethereum);

ethereum.enable();

export default web3;
