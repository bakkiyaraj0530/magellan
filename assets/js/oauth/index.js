import _ from 'lodash';
import axios from 'axios';
import CryptoJS from 'crypto-js';

// const updatingAuth = false;
let featureList = null;
// const user = {};
const OTPYRC = 'eyJrZXlTaXplIjpbMTI4XSwicGFzc3BocmFzZSI6WyJNYWdlISFAblJ4Il0sIml2IjpbIkYyN0Q1Qzk5Mjc' +
    '3MjZCQ0VGRTc1MTBCMUJERDNEMTM1Il0sIml0ZXJhdGlvbkNvdW50IjpbMTAwMDBdLCJzYWx0IjpbIjNGRjJFQzAxOUM2MjdCOTQ1M' +
    'jI1REVCQUQ3MUEwMUI2OTg1RkU4NEM5NUE3MEVCMTMyODgyRjg4QzBBNTlBNTUiXX0=';

export const isAuthorized = (featureName) => {
  let authorizedFeatures = featureList;

  if (authorizedFeatures == null) {
    authorizedFeatures = JSON.parse(window.localStorage.getItem('authorizedFeatures'));
  }

  return _.indexOf(authorizedFeatures, featureName) !== -1;
};

const isAgeRestricted = (dobParam) => {
  const dob = new Date(dobParam);
  const today = new Date();
  const diff = Math.floor((today - dob) / (1000 * 60 * 60 * 24 * 365));
  if (diff >= 18) {
    return false;
  }
  return true;
};

const decryptEncryptedInfo = (crypto, encryptedData) => {
  const encKeys = CryptoJS.enc.Base64.parse(crypto).toString(CryptoJS.enc.Utf8);
  const jsonObj = JSON.parse(encKeys);
  const keySize = jsonObj.keySize[0] / 32;
  const secretKey = CryptoJS.PBKDF2(
    jsonObj.passphrase[0],
    CryptoJS.enc.Hex.parse(jsonObj.salt[0]),
    { keySize, iterations: jsonObj.iterationCount[0] });
  const cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext: CryptoJS.enc.Base64.parse(encryptedData),
  });
  const deciphertext = CryptoJS.AES.decrypt(cipherParams, secretKey, { iv: CryptoJS.enc.Hex.parse(jsonObj.iv[0]) });

  return JSON.parse(deciphertext.toString(CryptoJS.enc.Utf8));
};

export const deleteSessionKeys = () => {
  const keys = ['access_token', 'token_type', 'token_expiration', 'expires_in', 'refresh_token',
    'scope', 'lastAccessTimestamp', 'authorizedFeatures', 'mailorder_token',
    'mailorder_token_expiration',
  ];

    // Don't try $window.sessionStorage.clear() here, it will blow up the app, iterate individually
  _.forEach(keys, (value) => {
    window.sessionStorage.removeItem(value);
    window.localStorage.removeItem(value);
  });

  featureList = null;
};

export const storeMailOrderToken = (data, deferred) => {
  if (data === undefined || data !== null || data !== '') {
    const response = JSON.parse(data);

    if (response.ResultNumber === 0) {
      const mailOrderToken = response.SecurityToken;
      const mailOrderTokenExpiration = response.LogonTimeout;
      window.sessionStorage.setItem('mailorder_token', mailOrderToken);
      window.sessionStorage.setItem('mailorder_token_expiration',
            new Date().getTime() + (60 * mailOrderTokenExpiration * 1000));
      return deferred.resolve();
    }
    return deferred.resolve();
  }
  return deferred.resolve();
};


const checkSubDomainLocalCache = () => {
  const isParametersAvailable = window.location.search;
  if (isParametersAvailable.length > 0) {
    const urlParameterString = window.location.search.split('?')[1];
    const hashes = urlParameterString.split('&');
    const vars = [];
    let hash = [];
    const data = [];
    for (let i = 0; i < hashes.length; i + 1) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      data.push(hash[1]);
    }
    if (vars.indexOf('splitPlatform') !== -1) {
      // Need to set something global to say this is split platform
      data[vars.indexOf('splitPlatform')] = !!'true';
    }
    if (vars.indexOf('podaic') !== -1) {
      const encryptedOauthData = data[vars.indexOf('podaic')];
      const decryptedOauthData = decryptEncryptedInfo(OTPYRC, encryptedOauthData);
      const accessToken = decryptedOauthData.accessToken;
      const clientType = decryptedOauthData.clientType;
      const expiresIn = decryptedOauthData.expiresIn;
      const lastAccessTime = decryptedOauthData.lastAccessTimestamp;
      const refreshToken = decryptedOauthData.refreshToken;
      const scope = decryptedOauthData.scope;
      const tokenExpiry = decryptedOauthData.tokenExpiration;
      const tokenType = decryptedOauthData.tokenType;
      window.localStorage.setItem('access_token', accessToken);
      window.localStorage.setItem('client_type', clientType);
      window.localStorage.setItem('expires_in', expiresIn);
      window.localStorage.setItem('lastAccessTimestamp', lastAccessTime);
      window.localStorage.setItem('refresh_token', refreshToken);
      window.localStorage.setItem('scope', scope);
      window.localStorage.setItem('token_expiry', tokenExpiry);
      window.localStorage.setItem('token_type', tokenType);
    }
  }
};

export const isSessionValid = () => {
  checkSubDomainLocalCache();
  const lastAccessTimestamp = window.localStorage.getItem('lastAccessTimestamp');
  const accessToken = window.localStorage.getItem('access_token');
  const tokenExpiration = window.localStorage.getItem('token_expiration');
  // var mailOrderTokenExpiration = $window.sessionStorage.getItem('mailorder_token_expiration');
  const now = new Date().getTime();
  if (accessToken == null) {
    return false;
  }

  if (tokenExpiration != null && tokenExpiration < now) {
    return false;
  }

  if (lastAccessTimestamp == null || (lastAccessTimestamp + 900000) < now.value) {
      // this means it's been longer than 15 minutes
    return false;
  }
  /* jshint camelcase: true */
  return true;
};

export const updateUserInfo = (response) => {
  let user = {};
  if (response !== undefined) {
    const crypto = response.headers.facit;
    if (response.data.podaci !== undefined) {
      const encryptedData = response.data.podaci[0];

      const userInfoData = decryptEncryptedInfo(crypto, encryptedData);
      user = userInfoData;
      user.isAgeRestricted = isAgeRestricted(user.dob);
      window.localStorage.setItem('dob', user.dateWithFormat);
      window.localStorage.setItem('firstName', user.userFirstName);
      window.localStorage.setItem('lastName', user.userLastName);
      window.localStorage.setItem('memberId', user.memebrId);
      window.localStorage.setItem('email', user.emailAddress);
      window.localStorage.setItem('adminUser', user.fromAdminPortal);
      window.localStorage.setItem('client_id', user.oauthClientId);
      if (user.specialtyMailOrderLink && user.specialtyMailOrderLink.indexOf(
                'sprxsso') >
            -1) {
        user.specialtyMailOrderLink = `${user.specialtyMailOrderLink
                }?dob=${user.dob}&firstName=${user.userFirstName}&lastName=${
                user.userLastName}&email=${user.emailAddress
                }&zip=${user.memberAddress.zip}`;
      }
    }
  }
  return user;
};

export const getUserInfoUrl = (isProvider) => {
  const nc = new Date().getTime();
  const isParametersAvailable = window.location.search;
  let userInfoURL = '';

  if (isProvider) {
    userInfoURL = `/portalmicroservices/api/loggedinuser/provideruserinfo?nc=${nc}`;
  } else {
    userInfoURL = `/portalmicroservices/api/loggedinuser/userinfo?nc=${nc}`;
  }

  if (isParametersAvailable.length > 0) {
    const urlParameterString = window.location.search.split('?')[1];
    const hashes = urlParameterString.split('&');
    const vars = [];
    let hash = [];
    const data = [];
    for (let i = 0; i < hashes.length; i + 1) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      data.push(hash[1]);
    }

    if (vars.indexOf('secondaryCardHolderId') !== -1 && vars.indexOf('secondaryClientId') !== -1 &&
          vars.indexOf('secondaryPatientId') !== -1 &&
          vars.indexOf('splitPlatform') !== -1 && vars.indexOf('bin') !== -1) {
      userInfoURL += `&secondaryCardHolderId=${data[vars.indexOf('secondaryCardHolderId')]}`;
      userInfoURL += `&secondaryClientId=${data[vars.indexOf('secondaryClientId')]}`;
      userInfoURL += `&secondaryPatientId=${data[vars.indexOf('secondaryPatientId')]}`;
      userInfoURL += `&splitPlatform=${data[vars.indexOf('splitPlatform')]}`;
      userInfoURL += `&bin=${data[vars.indexOf('bin')]}`;
      userInfoURL += `&oauthClientId=${data[vars.indexOf('oauthClientId')]}`;
    }
  }

  return userInfoURL;
};

export const updateLastAccessTimestamp = () => {
  window.localStorage.setItem('lastAccessTimestamp', new Date().getTime());
};

export const logoutAndDestroy = () => {
  const currentToken = window.localStorage.getItem('access_token');
  const clientId = window.localStorage.getItem('client_id');
  const logoutUrl = '/portalmicroservices/api/logout';
  axios.get(logoutUrl)
    .then((response) => {
      if (response.status === 200) {
        window.localStorage.clear();
        window.sessionStorage.clear();
        const redirectUrl = `/oauthproxy/oauth/logout?oauthToken=${currentToken}&client_id=${clientId}`;
        window.location.href = redirectUrl;
      }
    })
  .catch((error) => {
    if (error) {
      window.localStorage.clear();
      window.sessionStorage.clear();
      const redirectUrl = `/oauthproxy/oauth/logout?oauthToken=${currentToken}&client_id=${clientId}`;
      window.location.href = redirectUrl;
    }
  });
};

export const storeItems = () => {
  let locationHash = window.location.hash;
  let tokens = '';
  if (location.hash != null && location.hash.indexOf('access_token') > -1) {
    locationHash = locationHash.replace('#!/', '');
    locationHash = locationHash.replace('#!', '');
    // decode the token and remove ' and " from it
    locationHash = decodeURIComponent(locationHash);
    locationHash = locationHash.replace(/['"]+/g, '');

    if (locationHash.startsWith('#')) {
      locationHash = locationHash.substring(1);
    }
    if (locationHash.length > 0) {
      tokens = locationHash.split('&');
    }

    window.localStorage.clear();
    _.forEach(tokens, (value) => {
      const tokenData = value.split('=');

      if (tokenData.length >= 2) {
        window.localStorage.setItem(tokenData[0], tokenData[1]);
        if (tokenData[0] === 'expires_in') {
          window.localStorage.setItem('token_expiration', new Date().getTime() + (tokenData[1] * 1000));
        }
      }
    });

    window.localStorage.setItem('lastAccessTimestamp', new Date().getTime());
    // Get the user info
    window.location.hash = '';
  } else {
    locationHash = locationHash.replace('#!/', '');
    locationHash = locationHash.replace('#!', '');
    // decode the token and remove ' and " from it
    locationHash = decodeURIComponent(locationHash);
    locationHash = locationHash.replace(/['"]+/g, '');
    window.location.hash = locationHash;
  }
};
