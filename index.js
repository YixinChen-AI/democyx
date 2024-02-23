#!/usr/bin/env node

// Ethereum and Blockchain dependencies
const { ethers } = require('ethers');
const Web3 = require('web3');
const ganache = require('ganache-cli');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { contracts } = require('@openzeppelin/contracts');
const ensNamehash = require('eth-ens-namehash');
const ensResolver = require('eth-ens-resolver');
const sigUtil = require('eth-sig-util');
const EthereumTx = require('ethereumjs-tx').Transaction;
const ipfsClient = require('ipfs-http-client');

// Hardhat development
const hardhat = require('hardhat');

// Frontend libraries
const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');
const Vue = require('vue');
const Angular = require('angular'); // This is not typically required like this
const _ = require('lodash');
const moment = require('moment');
const { useFormik } = require('formik');
const yup = require('yup');

// Redux for state management
const { createStore, applyMiddleware } = require('redux');
const { Provider } = require('react-redux');
const thunk = require('redux-thunk');

// Next.js and styling
const next = require('next');
const tailwindcss = require('tailwindcss');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssLoader = require('css-loader');
const styleLoader = require('style-loader');
const sass = require('sass');

// Back-end Node.js libraries
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bcryptjs = require('bcryptjs');
const nodemon = require('nodemon');

// Testing frameworks
const jest = require('jest');
const enzyme = require('enzyme');
const { ReactTestRenderer } = require('react-test-renderer');

// Others
const uuid = require('uuid');
const socketIo = require('socket.io');
const RxJS = require('rxjs');
const dayjs = require('dayjs');
const graphql = require('graphql');
const { ApolloServer, ApolloClient } = require('apollo-server');

// Please add your specific usage code for each library here
const express = require('express');
const Web3 = require('web3');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ethers } = require('ethers');
const axios = require('axios');

// 初始化 dotenv，以便能够从 .env 文件中读取环境变量
dotenv.config();

// 设置基本的 Express 设置
const app = express();
app.use(cors());
app.use(bodyParser.json()); // 用于解析 JSON 格式的请求体

// 初始化 Web3 和 ethers 实例
const web3 = new Web3(process.env.INFURA_URL); // 假设你的 .env 文件中定义了 INFURA_URL
const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL);

// 示例的 Ethereum 地址和 ABI（这应该是您合约的实际地址和ABI）
const sampleContractAddress = '0x...';
const sampleContractABI = [...];

// 创建一个合约实例
const sampleContract = new web3.eth.Contract(sampleContractABI, sampleContractAddress);

// Express 路由定义
app.get('/', (req, res) => {
    res.send('Hello, this is my blockchain-enabled server!');
});

// 获取智能合约的某个状态
app.get('/contract-state', async (req, res) => {
    try {
        const data = await sampleContract.methods.someMethod().call();
        res.json({ data });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data from the smart contract');
    }
});

// 使用 ethers 获取区块链上的数据
app.get('/ethers-data', async (req, res) => {
    try {
        const blockNumber = await provider.getBlockNumber();
        res.json({ latestBlockNumber: blockNumber });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data using ethers');
    }
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
