const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":true,"internalType":"tokenId","name":"tokenAId","type":"tokenId"},{"indexed":false,"internalType":"uint256","name":"tokenAAmount","type":"uint256"},{"indexed":true,"internalType":"tokenId","name":"tokenBId","type":"tokenId"},{"indexed":false,"internalType":"uint256","name":"tokenBAmount","type":"uint256"}],"name":"AddLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":true,"internalType":"tokenId","name":"tokenid","type":"tokenId"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":true,"internalType":"tokenId","name":"tokenAId","type":"tokenId"},{"indexed":false,"internalType":"uint256","name":"tokenAAmount","type":"uint256"},{"indexed":true,"internalType":"tokenId","name":"tokenBId","type":"tokenId"},{"indexed":false,"internalType":"uint256","name":"tokenBAmount","type":"uint256"}],"name":"RemoveLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"destination","type":"address"},{"indexed":true,"internalType":"tokenId","name":"tokenSold","type":"tokenId"},{"indexed":false,"internalType":"uint256","name":"amountSold","type":"uint256"},{"indexed":true,"internalType":"tokenId","name":"tokenBought","type":"tokenId"},{"indexed":false,"internalType":"uint256","name":"amountBought","type":"uint256"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":true,"internalType":"tokenId","name":"tokenid","type":"tokenId"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[{"internalType":"tokenId","name":"_tokenAIn","type":"tokenId","value":"tti_14559f510fa839880af467d1"},{"internalType":"uint256","name":"_amountTokenA","type":"uint256","value":"50000"},{"internalType":"tokenId","name":"_tokenBIn","type":"tokenId","value":"tti_5649544520544f4b454e6e40"},{"internalType":"uint256","name":"_maxTokenB","type":"uint256","value":"250"},{"internalType":"uint256","name":"_deadline","type":"uint256","value":"1000"}],"name":"addLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"changeDaoOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_daoPaymentAddr","type":"address"}],"name":"changeDaoPaymentAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_sbpName","type":"string"}],"name":"changeVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"tokenId","name":"_tokenAIn","type":"tokenId","value":"tti_14559f510fa839880af467d1"},{"internalType":"tokenId","name":"_tokenBIn","type":"tokenId","value":"tti_5649544520544f4b454e6e40"}],"name":"createPair","outputs":[],"stateMutability":"payable","type":"function","token":{"tokenName":"Nyani","tokenSymbol":"NYA-001","totalSupply":"9997925236579112860089133788","decimals":18,"owner":"vite_23c6be45392335da7f6dc1f02795e6a1c841f8727d7ae914fb","tokenId":"tti_14559f510fa839880af467d1","maxSupply":"0","ownerBurnOnly":false,"isReIssuable":false,"index":1,"isOwnerBurnOnly":false},"tokenUnit":18,"amount":"100000"},{"inputs":[],"name":"daoOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"daoPaymentAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"tokenId","name":"_tokenAIn","type":"tokenId"},{"internalType":"tokenId","name":"_tokenBIn","type":"tokenId"}],"name":"getLiquidityPoolBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256","value":"0"}],"name":"getPairAtIndex","outputs":[{"internalType":"tokenId","name":"","type":"tokenId"},{"internalType":"tokenId","name":"","type":"tokenId"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPairCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"tokenId","name":"_tokenAIn","type":"tokenId"},{"internalType":"tokenId","name":"_tokenBIn","type":"tokenId"}],"name":"getPairSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"tokenId","name":"_vitetokenIn","type":"tokenId"},{"internalType":"uint256","name":"_amountIn","type":"uint256"},{"internalType":"tokenId","name":"_vitetokenOut","type":"tokenId"}],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"tokenId","name":"_token","type":"tokenId"}],"name":"getWrapBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"tokenId","name":"_tokenAIn","type":"tokenId"},{"internalType":"uint256","name":"_minTokenA","type":"uint256"},{"internalType":"tokenId","name":"_tokenBIn","type":"tokenId"},{"internalType":"uint256","name":"_minTokenB","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revokeVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"tokenId","name":"_outputTokenId","type":"tokenId"},{"internalType":"uint256","name":"_minOutput","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"swap","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"tokenId","name":"_token","type":"tokenId"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"unwrap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wrap","outputs":[],"stateMutability":"payable","type":"function","amount":"50000","token":{"tokenName":"Nyani","tokenSymbol":"NYA-001","totalSupply":"9997925236579112860089133788","decimals":18,"owner":"vite_23c6be45392335da7f6dc1f02795e6a1c841f8727d7ae914fb","tokenId":"tti_14559f510fa839880af467d1","maxSupply":"0","ownerBurnOnly":false,"isReIssuable":false,"index":1,"isOwnerBurnOnly":false},"tokenUnit":18},{"stateMutability":"payable","type":"receive"}]

const contractAddress = 'vite_826ab570c1740bc59d8fa5a2e8d408040c7168b45b087db999'

const wsProvider = new $vite_WS.WS_RPC('wss://node-vite.thomiz.dev/ws')
const api = new $vite_vitejs.ViteAPI(wsProvider, async () => {
  // ViteConnect
  const viteConnect = new ViteBifrost.default({ bridge: "wss://viteconnect.thomiz.dev" })
  const connectQR = new QRCode('connectQR', { width: 150, height: 150, correctLevel: QRCode.CorrectLevel.L })
  
  viteConnect.createSession().then(() => {
    connectQR.makeCode(viteConnect.uri)
  })
  
  viteConnect.on('connect', (err, payload) => {
    document.getElementById('connectQR').style.display = "none"
    api.nya.toast('success', 'Connected with wallet!')

    viteConnect.connectedAddress = payload.params[0].accounts[0]

    viteConnect.requestExecute = (block) => {
      return new Promise((resolve, reject) => {
        viteConnect.sendCustomRequest({
          method: 'vite_signAndSendTx',
          params: [{
              block
          }]
        }).then(() => resolve()).catch(err => reject(err))
      })
    }
  })

  viteConnect.on('disconnect', () => {
    viteConnect.connectedAddress = undefined
    api.nya.toast('success', 'Disonnected from wallet, refreshing page!')

    setTimeout(() => {
      window.location.reload()
    }, 2000)
  })
  
  // DEX
  const pairCount = await api.nya.request('getPairCount')
  
  for (let i = 0; i < pairCount[0]; i++) {
    const pair = await api.nya.request('getPairAtIndex', [i])

    const pairTokens = [
      await api.request("contract_getTokenInfoById", pair[0]),
      await api.request("contract_getTokenInfoById", pair[1])
    ]

    document.getElementById('swapPage_pairs_page').innerHTML += `
      <li id="${i}" class="is-clickable is-unselectable" style="background-color: #2F0C49 !important;">
        <span>${pairTokens[0].tokenSymbol}-${"0".repeat(3 - pairTokens[0].index.toString().length) + pairTokens[0].index} ${pairTokens[1].tokenSymbol}-${"0".repeat(3 - pairTokens[1].index.toString().length) + pairTokens[1].index}</span>
      </li>`
  }

  document.getElementById('swapPage_pairs_page').addEventListener('click', async function (e) {
    var target = e.target

    while (target && target.parentNode !== document.getElementById('swapPage_pairs_page')) {
      target = target.parentNode
      if (!target) { return }
    }

    if (target.tagName === 'LI') {
      const pair = await api.nya.request('getPairAtIndex', [target.id])

      let pairTokens = [
        await api.request("contract_getTokenInfoById", pair[0]),
        await api.request("contract_getTokenInfoById", pair[1])
      ]

      // Swap
      document.getElementById('swapPage_inputToken').innerHTML = pairTokens[0]['tokenSymbol']
      document.getElementById('swapPage_outputToken').innerHTML = pairTokens[1]['tokenSymbol']
      
      document.getElementById('swapPage_inputToken').onclick = document.getElementById('swapPage_outputToken').onclick = () => {
        const cache = JSON.parse(JSON.stringify(pairTokens))

        pairTokens[0] = cache[1]
        pairTokens[1] = cache[0]
        
        document.getElementById('swapPage_inputToken').innerHTML = pairTokens[0]['tokenSymbol']
        document.getElementById('swapPage_outputToken').innerHTML = pairTokens[1]['tokenSymbol']
        document.getElementById('lqPage_tokenA').innerHTML = pairTokens[0]['tokenSymbol']
        document.getElementById('lqPage_tokenB').innerHTML = pairTokens[1]['tokenSymbol']

        document.getElementById('swapPage_inputAmount').value = ''
        document.getElementById('swapPage_outputAmount').value = ''
      }

      document.getElementById('swapPage_inputAmount').oninput = document.getElementById('swapPage_outputAmount').oninput = async () => {
        if (document.getElementById('swapPage_inputAmount').value === "") return document.getElementById('swapPage_outputAmount').value = ""
        const rate = await api.nya.request('getRate', [ pairTokens[0]['tokenId'], Big(document.getElementById('swapPage_inputAmount').value).times(`1e${pairTokens[0]['decimals']}`).toFixed(), pairTokens[1]['tokenId'] ])
        
        document.getElementById('swapPage_outputAmount').value = `${Big(rate).div(`1e${pairTokens[1]['decimals']}`).toFixed(8)}`
      }

      document.getElementById('swapPage_swap').onclick = async () => {
        if (typeof viteConnect.connectedAddress === 'undefined') return api.nya.toast('danger', 'Please connect your wallet first.')

        api.nya.toast('success', 'Please accept transaction on wallet.')
        const block = await $vite_vitejs.accountBlock.createAccountBlock("callContract", {
          address: viteConnect.connectedAddress,
          abi: abi,
          toAddress: contractAddress,
          methodName: "swap",
          params: [ pairTokens[1]["tokenId"],
                    Big(document.getElementById('swapPage_inputAmount').value).times(`1e${pairTokens[0]['decimals']}`).div(`100`).times(100 - parseInt(document.getElementById('swapPage_slippage').value)).toFixed(),
                    await api.nya.getNextContractHeight() ],
          tokenId: pairTokens[0]['tokenId'],
          amount: Big(document.getElementById('swapPage_inputAmount').value).times(`1e${pairTokens[0]['decimals']}`).toFixed()
        }).accountBlock

        viteConnect.requestExecute(block).then(() => {
          api.nya.toast('success', 'Swap request successfully sent!')
        }).catch(err => {
          api.nya.toast('danger', 'Something went wrong! Check console.')
          console.log('Error!', err)
        })
      }

      // Provide LQ
      document.getElementById('lqPage_tokenA').innerHTML = pairTokens[0]['tokenSymbol']
      document.getElementById('lqPage_tokenB').innerHTML = pairTokens[1]['tokenSymbol']

      document.getElementById('lqPage_amountA').oninput = async () => {
        if (document.getElementById('lqPage_amountA').value === "") return document.getElementById('lqPage_amountB').value = ""
        const lqBalance = await api.nya.request('getPairSupply', [ pairTokens[1]['tokenId'], pairTokens[0]['tokenId'] ])

        const ratePercentage = Big(lqBalance[0]).div(lqBalance[1]).times("100")
        const inputLq = Big(document.getElementById('lqPage_amountA').value).times(`1e${pairTokens[0]['decimals']}`)
        const inputLq2 = inputLq.div(`100`).times(ratePercentage)
        
        document.getElementById('lqPage_amountB').value = `${inputLq2.div(`1e${pairTokens[1]['decimals']}`).toFixed()}`
      }

      document.getElementById('lqPage_amountB').oninput = async () => {
        if (document.getElementById('lqPage_amountB').value === "") return document.getElementById('lqPage_amountA').value = ""
        const lqBalance = await api.nya.request('getPairSupply', [ pairTokens[0]['tokenId'], pairTokens[1]['tokenId'] ])

        const ratePercentage = Big(lqBalance[0]).div(lqBalance[1]).times("100")
        const inputLq = Big(document.getElementById('lqPage_amountB').value).times(`1e${pairTokens[1]['decimals']}`)
        const inputLq2 = inputLq.div(`100`).times(ratePercentage)
        
        document.getElementById('lqPage_amountA').value = `${inputLq2.div(`1e${pairTokens[0]['decimals']}`).toFixed()}`
      }

      document.getElementById('lqPage_addLiquidity').onclick = async () => {
        if (typeof viteConnect.connectedAddress === 'undefined') return api.nya.toast('danger', 'Please connect your wallet first.')

        api.nya.toast('success', 'Please accept transaction on wallet.')
        const block = await $vite_vitejs.accountBlock.createAccountBlock("callContract", {
          address: viteConnect.connectedAddress,
          abi: abi,
          toAddress: contractAddress,
          methodName: "addLiquidity",
          params: [ pairTokens[0]["tokenId"], 
                    Big(document.getElementById("lqPage_amountA").value).times(`1e${pairTokens[0]["decimals"]}`).toFixed(),
                    pairTokens[1]["tokenId"],
                    Big(document.getElementById("lqPage_amountB").value).times(`1e${pairTokens[1]["decimals"]}`).plus("1").toFixed(),
                    await api.nya.getNextContractHeight() ]
        }).accountBlock

        viteConnect.requestExecute(block).then(() => {
          api.nya.toast('success', 'Adding liquidity request successfully sent!')
        }).catch(err => {
          api.nya.toast('danger', 'Something went wrong! Check console.')
          console.log('Error!', err)
        })
      }

      // Wrap Token
      document.getElementById('lqPage_wrapTokens').innerHTML = ``

      pairTokens.forEach(pairToken => {
        document.getElementById('lqPage_wrapTokens').innerHTML += `
          <option id="lqPage_wrapTokens_${pairToken["tokenSymbol"]}" decimals="${pairToken["decimals"]}" tokenid="${pairToken["tokenId"]}">${pairToken["tokenSymbol"]}</option>
        `
      })

      document.getElementById('lqPage_wrapBalance').onclick = async () => {
        if (typeof viteConnect.connectedAddress === 'undefined') return api.nya.toast('danger', 'Please connect your wallet first.')

        const balance = await api.nya.request('getWrapBalance', [ viteConnect.connectedAddress, document.getElementById("lqPage_wrapTokens_" + document.getElementById("lqPage_wrapTokens").options[document.getElementById("lqPage_wrapTokens").selectedIndex].innerHTML).getAttribute("tokenid") ])
        
        document.getElementById('lqPage_wrapBalance').innerHTML = `${Big(balance).div(`1e${document.getElementById("lqPage_wrapTokens_" + document.getElementById("lqPage_wrapTokens").options[document.getElementById("lqPage_wrapTokens").selectedIndex].innerHTML).getAttribute("decimals")}`).toFixed()}`
      }

      document.getElementById('lqPage_wrapToken').onclick = async () => {
        if (typeof viteConnect.connectedAddress === 'undefined') return api.nya.toast('danger', 'Please connect your wallet first.')

        api.nya.toast('success', 'Please accept transaction on wallet.')
        const block = await $vite_vitejs.accountBlock.createAccountBlock("callContract", {
          address: viteConnect.connectedAddress,
          abi: abi,
          toAddress: contractAddress,
          methodName: "wrap",
          tokenId: document.getElementById("lqPage_wrapTokens_" + document.getElementById("lqPage_wrapTokens").options[document.getElementById("lqPage_wrapTokens").selectedIndex].innerHTML).getAttribute("tokenid"),
          amount: Big(document.getElementById("lqPage_wrapAmount").value).times(`1e${document.getElementById("lqPage_wrapTokens_" + document.getElementById("lqPage_wrapTokens").options[document.getElementById("lqPage_wrapTokens").selectedIndex].innerHTML).getAttribute("decimals")}`).toFixed()
        }).accountBlock

        viteConnect.requestExecute(block).then(() => {
          api.nya.toast('success', 'Wrap request successfully sent!')
        }).catch(err => {
          api.nya.toast('danger', 'Something went wrong! Check console.')
          console.log('Error!', err)
        })
      }

      document.getElementById('lqPage_unwrapToken').onclick = async () => {
        if (typeof viteConnect.connectedAddress === 'undefined') return api.nya.toast('danger', 'Please connect your wallet first.')

        api.nya.toast('success', 'Please accept transaction on wallet.')
        const block = await $vite_vitejs.accountBlock.createAccountBlock("callContract", {
          address: viteConnect.connectedAddress,
          abi: abi,
          toAddress: contractAddress,
          methodName: "unwrap",
          params: [ document.getElementById("lqPage_wrapTokens_" + document.getElementById("lqPage_wrapTokens").options[document.getElementById("lqPage_wrapTokens").selectedIndex].innerHTML).getAttribute("tokenid"),
                    Big(document.getElementById('lqPage_wrapAmount').value).times(`1e${document.getElementById("lqPage_wrapTokens_" + document.getElementById("lqPage_wrapTokens").options[document.getElementById("lqPage_wrapTokens").selectedIndex].innerHTML).getAttribute("decimals")}`).toFixed() ],
        }).accountBlock

        viteConnect.requestExecute(block).then(() => {
          api.nya.toast('success', 'Unwrap request successfully sent!')
        }).catch(err => {
          api.nya.toast('danger', 'Something went wrong! Check console.')
          console.log('Error!', err)
        })
      }
    }
  })

  document.getElementById("loader").classList = "pageloader is-link"
})

api.nya = {
  getNextContractHeight: async () => {
    const accountInfo = await api.request('ledger_getAccountInfoByAddress', contractAddress)

    return (parseInt(accountInfo.blockCount) + 1).toString()
  },

  request: async (method, args) => {
    const methodAbi = abi.find((x) => {
      return x.name === method
    })
  
    const pairCount = await api.request("contract_query", {
      address: contractAddress,
      data: buffer.Buffer.from($vite_vitejs.abi.encodeFunctionCall(methodAbi, args ?? []), "hex").toString("base64")
    })
  
    let resultBytes = buffer.Buffer.from(pairCount, 'base64').toString('hex')
    let outputs = []
  
    for (let i = 0; i < methodAbi.outputs.length; i++) {
      outputs.push(methodAbi.outputs[i].type);
    }
  
    return $vite_vitejs.abi.decodeParameters(outputs, resultBytes)
  },

  toast: (type, message) => {
    bulmaToast.toast({
      message: message,
      type: `is-${type}`,
      dismissible: false,
      position: "bottom-center",
      animate: { in: 'fadeIn', out: 'fadeOut' },
    })
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('contractAddress').innerHTML = contractAddress
  document.getElementById('contractAddress').onclick = () => {
    window.open(`https://vitcscan.com/address/${contractAddress}`, "_blank")
  }

  document.getElementById('tabs_swapPage').onclick = function () {
    document.getElementById('tabs_swapPage').classList = "is-active"
    document.getElementById('tabs_provideLP').classList = ""
    document.getElementById('tabs_stake').classList = ""

    document.getElementById('swapPage').style.display = "block"
    document.getElementById('liquidityPage').style.display = "none"
  }

  document.getElementById('tabs_provideLP').onclick = function () {
    document.getElementById('tabs_swapPage').classList = ""
    document.getElementById('tabs_provideLP').classList = "is-active"
    document.getElementById('tabs_stake').classList = ""

    document.getElementById('swapPage').style.display = "none"
    document.getElementById('liquidityPage').style.display = "block"

    document.getElementById('liquidityPage').scrollIntoView({ behavior: "smooth" })
  }

  document.getElementById('tabs_stake').onclick = function () {
    api.nya.toast('info', 'Coming soon...')

    // document.getElementById('tabs_swapPage').classList = ""
    // document.getElementById('tabs_provideLP').classList = ""
    // document.getElementById('tabs_stake').classList = "is-active"
  }
})