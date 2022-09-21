import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import * as CryptoJS from 'crypto-js';

var message =
  '{"MsgID":"928ecdb307c244a221-09-2022 04:23:50.713","MsgType":"payment","TransactionID":"16637485747761355","PhoneNumber":"0964175985","BankId":0,"TransFormType":4,"CardNumber":"","CardHolder":"","CardIssueDate":"","CardConnectId":0,"BankConnectId":0,"PromoCode":"","AgencyCode":"EGENE","MerchantCode":"EGENE","OrderId":"064416b9da9653862b27","Amount":2000}';
var key = 'BA99FDF9FEEC1EF9896DE9BF00CF27C4';
var u = CryptoJS.default.lib.WordArray.create(Buffer.from(key, 'utf-8')),
  n = CryptoJS.default.lib.WordArray.random(16),
  l = CryptoJS.default.AES.encrypt(message, u, {
    mode: CryptoJS.default.mode.CTR,
    padding: CryptoJS.default.pad.NoPadding,
    iv: n,
  }),
  c = [
    Buffer.from(n.toString(CryptoJS.default.enc.Base64), 'base64'),
    Buffer.from(l.toString(CryptoJS.default.format.Hex), 'hex'),
  ];
console.log(Buffer.concat(c).toString('base64'));
return Buffer.concat(c).toString('base64');
